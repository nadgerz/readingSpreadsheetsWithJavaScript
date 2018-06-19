#!/bin/bash

#
#    Run node script and assume spreadsheet of same name.
#
#    Just to make things a bit easier when testing.
#
fullFilename=${1}

location=$(dirname "$fullFilename")

filename=$(basename "$fullFilename")
fname="${filename%.*}"
ext=${filename##*.}

cd ${location} || exit 3

node ${filename} -f ../../data/${fname}.xls  2>&1 | tee ../../logs/${fname}.log

