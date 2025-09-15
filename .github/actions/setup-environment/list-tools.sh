#!/usr/bin/env bash

if [ ! -f .tool-versions ]; then
  echo "No .tool-versions file found." >&2
  exit 0
fi

while read -r tool version _; do

    # skip comments
  [[ "$tool" == \#* ]] && continue

  # skip empty lines
  [[ -z "$tool" ]] && continue

  # skip lines with no $version
  [[ -z "$version" ]] && continue

  # output the tool and version
  echo "$tool=$version" >> "${GITHUB_OUTPUT:-/dev/stdout}"

done < .tool-versions
