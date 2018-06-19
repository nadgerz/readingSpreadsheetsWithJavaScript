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

# node --max-old-space-size=8192 --optimize-for-size --max-executable-size=8192  --max_old_space_size=8192 --optimize_for_size --max_executable_size=8192 node_modules/karma/bin/karma start --single-run --max_new_space_size=8192   --prod --aot

now=$(date '+%Y-%m-%d_%H:%M:%S-%s')

logFile="../../logs/${fname}-${now}.log"

runtimeArgs=""
runtimeArgs="--max-old-space-size=8192"
runtimeArgs="--max-old-space-size=4096"

node ${runtimeArgs} ${filename} -f ../../data/${fname}.xls  2>&1 | tee ${logFile}
retVal=$?

echo "LOGFILE: ${logFile}"

exit ${retVal}
