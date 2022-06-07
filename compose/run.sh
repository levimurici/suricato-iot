#!/bin/sh
set -e
sudo groupadd mosquitto
sudo chown root:mosquitto -R $1
