#!/usr/bin/env bash
set -euo pipefail

APP_ROOT=""
RELEASE_ID=""
KEEP_RELEASES="2"

while [[ $# -gt 0 ]]; do
  case "$1" in
    --app-root)
      APP_ROOT="$2"
      shift 2
      ;;
    --release-id)
      RELEASE_ID="$2"
      shift 2
      ;;
    --keep)
      KEEP_RELEASES="$2"
      shift 2
      ;;
    *)
      echo "Unknown argument: $1" >&2
      exit 1
      ;;
  esac
done

if [[ -z "$APP_ROOT" ]]; then
  echo "Missing required argument: --app-root" >&2
  exit 1
fi

if [[ -z "$RELEASE_ID" ]]; then
  echo "Missing required argument: --release-id" >&2
  exit 1
fi

if ! [[ "$KEEP_RELEASES" =~ ^[0-9]+$ ]]; then
  echo "--keep must be a non-negative integer" >&2
  exit 1
fi

RELEASES_DIR="$APP_ROOT/releases"
CURRENT_LINK="$APP_ROOT/current"
SHARED_TMP_DIR="$APP_ROOT/shared/tmp"
NEW_RELEASE="$RELEASES_DIR/$RELEASE_ID"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

if [[ ! -d "$NEW_RELEASE" ]]; then
  echo "Release directory not found: $NEW_RELEASE" >&2
  exit 1
fi

if [[ ! -f "$NEW_RELEASE/index.html" ]]; then
  echo "Release is invalid: missing index.html in $NEW_RELEASE" >&2
  exit 1
fi

mkdir -p "$SHARED_TMP_DIR"

if [[ -L "$CURRENT_LINK" ]]; then
  PREVIOUS_RELEASE="$(readlink -f "$CURRENT_LINK")"
  printf '%s\n' "$PREVIOUS_RELEASE" > "$SHARED_TMP_DIR/previous_release"
fi

echo "Switching current symlink to $NEW_RELEASE"
ln -sfn "$NEW_RELEASE" "$CURRENT_LINK"

"$SCRIPT_DIR/release_cleanup.sh" --app-root "$APP_ROOT" --keep "$KEEP_RELEASES"

echo "Deploy complete. Current points to: $(readlink -f "$CURRENT_LINK")"
