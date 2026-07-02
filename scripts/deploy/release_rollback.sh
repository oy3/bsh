#!/usr/bin/env bash
set -euo pipefail

APP_ROOT=""
RELEASE_ID=""

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

RELEASES_DIR="$APP_ROOT/releases"
CURRENT_LINK="$APP_ROOT/current"
SHARED_TMP_DIR="$APP_ROOT/shared/tmp"

if [[ -n "$RELEASE_ID" ]]; then
  TARGET_RELEASE="$RELEASES_DIR/$RELEASE_ID"
else
  if [[ ! -f "$SHARED_TMP_DIR/previous_release" ]]; then
    echo "No previous release file found and no --release-id provided" >&2
    exit 1
  fi
  TARGET_RELEASE="$(cat "$SHARED_TMP_DIR/previous_release")"
fi

if [[ ! -d "$TARGET_RELEASE" ]]; then
  echo "Target release does not exist: $TARGET_RELEASE" >&2
  exit 1
fi

if [[ ! -f "$TARGET_RELEASE/index.html" ]]; then
  echo "Target release is invalid: missing index.html in $TARGET_RELEASE" >&2
  exit 1
fi

mkdir -p "$SHARED_TMP_DIR"
if [[ -L "$CURRENT_LINK" ]]; then
  CURRENT_TARGET="$(readlink -f "$CURRENT_LINK")"
  printf '%s\n' "$CURRENT_TARGET" > "$SHARED_TMP_DIR/previous_release"
fi

echo "Rolling back current symlink to $TARGET_RELEASE"
ln -sfn "$TARGET_RELEASE" "$CURRENT_LINK"

echo "Rollback complete. Current points to: $(readlink -f "$CURRENT_LINK")"
