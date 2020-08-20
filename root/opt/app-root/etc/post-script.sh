#!/bin/bash

sed -i '1s/^/require(".\/send-mail");\n/' /opt/app-root/src/cloud/main.js
