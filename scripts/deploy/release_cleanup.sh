#!/usr/bin/env bash
set -euo pipefail

APP_ROOT=""
KEEP_RELEASES="2"

while [[ $# -gt 0 ]]; do
  case "$1" in
    --app-root)
      APP_ROOT="$2"
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

if ! [[ "$KEEP_RELEASES" =~ ^[0-9]+$ ]]; then
  echo "--keep must be a non-negative integer" >&2
  exit 1
fi

RELEASES_DIR="$APP_ROOT/releases"
CURRENT_LINK="$APP_ROOT/current"

if [[ ! -d "$RELEASES_DIR" ]]; then
  echo "Releases directory not found: $RELEASES_DIR"
  exit 0
fi

CURRENT_TARGET=""
if [[ -L "$CURRENT_LINK" ]]; then
  CURRENT_TARGET="$(readlink -f "$CURRENT_LINK")"
fi

mapfile -t RELEASE_PATHS < <(ls -1dt "$RELEASES_DIR"/*/ 2>/dev/null || true)

if [[ ${#RELEASE_PATHS[@]} -eq 0 ]]; then
  echo "No releases to clean up"
  exit 0
fi

INDEX=0
for RELEASE_PATH in "${RELEASE_PATHS[@]}"; do
  RELEASE_PATH="${RELEASE_PATH%/}"
  INDEX=$((INDEX + 1))

  if (( INDEX <= KEEP_RELEASES )); then
    continue
  fi

  if [[ -n "$CURRENT_TARGET" ]] && [[ "$(readlink -f "$RELEASE_PATH")" == "$CURRENT_TARGET" ]]; then
    echo "Skipping current release: $RELEASE_PATH"
    continue
  fi

  echo "Deleting old release: $RELEASE_PATH"
  rm -rf -- "$RELEASE_PATH"
done
