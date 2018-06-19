#!/bin/bash

#
#    Run node script and assume spreadsheet of same name.
#
fullfilename=${1}
filename=$(basename "$fullfilename")
fname="${filename%.*}"
ext=${filename##*.}

node ${fullfilename} -f ../../data/${fname}.xls  2>&1 | tee ../../logs/${fname}.log

