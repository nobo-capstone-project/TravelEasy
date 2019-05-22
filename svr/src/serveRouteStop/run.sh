#!/usr/bin/env bash

docker rm -f routestop
docker pull gcr.io/traveleasy-1554765588100/routestop:latest
docker run \
    --name routestop \
    -e REDIS_ADDR=redis:6379 \
    -p 8081:8080 \
	--network redisServer \
    -d gcr.io/traveleasy-1554765588100/routestop:latest

docker ps -a
curl -v localhost:8081/route/ok/