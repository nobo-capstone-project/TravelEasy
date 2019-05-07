#!/usr/bin/env bash

echo
echo "===== Running RouteStop ====="
echo

docker rm -f routestop
docker pull gcr.io/traveleasy-1554765588100/routestop:latest
docker run -p 8082:8080 \
    --name routestop \
    --network test \
    -e AUTH_SERVER_ADDR=auth:8081 \
    -d gcr.io/traveleasy-1554765588100/routestop:latest