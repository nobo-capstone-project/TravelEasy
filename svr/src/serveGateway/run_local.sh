#!/usr/bin/env bash

echo
echo "===== Running Gateway ====="
echo

docker rm -f gateway
docker pull gcr.io/traveleasy-1554765588100/gateway_managed:latest
docker run -p 8080:8080 \
	--network test \
    --name gateway \
	-e ROUTE_STOP_SERVER_ADDR=routestop:8080 \
    -e AUTH_SERVER_ADDR=auth:8080 \
    -d gcr.io/traveleasy-1554765588100/gateway:latest