#!/usr/bin/env bash

./build_and_push.sh
 ssh -i ~/.ssh/id_rsa $GCPADDR < ./run.sh