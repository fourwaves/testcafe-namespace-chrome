#!/bin/bash
set -e

if [[ $GITHUB_WORKSPACE ]]; then
  BUILD_PATH="${GITHUB_WORKSPACE}"
else
  BUILD_PATH=$(cd .. && pwd)
fi

echo '######## List browsers'
testcafe --list-browsers

echo '######## Run tests'
testcafe 'chrome:headless --disable-setuid-sandbox --window-size=1920x1080' --concurrency 7 index.js