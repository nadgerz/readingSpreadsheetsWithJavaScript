#!/bin/sh

date > start

# https://stackoverflow.com/questions/1393486/error-java-lang-outofmemoryerror-gc-overhead-limit-exceeded
# -Xms1g -Xmx2g 
# -XX:+UseG1GC -XX:G1HeapRegionSize=n -XX:MaxGCPauseMillis=m
# -XX:ParallelGCThreads=n -XX:ConcGCThreads=n

export JAVA_OPTS="-Xms512m -Xmx4096M"
export JAVA_OPTS="-Xms1024m -Xmx4096M"
export JAVA_OPTS="-Xms1024m -Xmx8192M"

flags="-XX:-UseGCOverheadLimit -Xloggc:gc.log"

now=$(date '+%s')

java ${flags} ExcelReader > ExcelReader-${now}.log 2>&1

date > end


