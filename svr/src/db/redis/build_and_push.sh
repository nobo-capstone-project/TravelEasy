#!/usr/bin/env bash

docker build -t gcr.io/traveleasy-1554765588100/redis:test .
docker push gcr.io/traveleasy-1554765588100/redis:test