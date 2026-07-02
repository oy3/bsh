#!/usr/bin/env bash
set -euo pipefail

APP_ROOT=""

while [[ $# -gt 0 ]]; do
  case "$1" in
    --app-root)
      APP_ROOT="$2"
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

CURRENT_TARGET=""
if [[ -L "$CURRENT_LINK" ]]; then
  CURRENT_TARGET="$(readlink -f "$CURRENT_LINK")"
fi

echo "App root: $APP_ROOT"
echo "Current symlink target: ${CURRENT_TARGET:-<not-set>}"

echo "Available releases (newest first):"
mapfile -t RELEASE_PATHS < <(ls -1dt "$RELEASES_DIR"/*/ 2>/dev/null || true)

if [[ ${#RELEASE_PATHS[@]} -eq 0 ]]; then
  echo "- none"
  exit 0
fi

for RELEASE_PATH in "${RELEASE_PATHS[@]}"; do
  RELEASE_PATH="${RELEASE_PATH%/}"
  MARKER=" "
  if [[ -n "$CURRENT_TARGET" ]] && [[ "$(readlink -f "$RELEASE_PATH")" == "$CURRENT_TARGET" ]]; then
    MARKER="*"
  fi
  echo "$MARKER $RELEASE_PATH"
done
