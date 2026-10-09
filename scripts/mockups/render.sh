#!/usr/bin/env bash
# Renders anonymised mockups to PNG: ./render.sh <name> <width> <height>
set -e
cd "$(dirname "$0")"
mkdir -p out
google-chrome --headless=new --no-sandbox --disable-gpu --hide-scrollbars --allow-file-access-from-files \
  --force-device-scale-factor=1 --virtual-time-budget=6000 --run-all-compositor-stages-before-draw --window-size="$2,$3" \
  --screenshot="out/$1.png" "file://$PWD/$1.html" 2>/dev/null
echo "out/$1.png"
