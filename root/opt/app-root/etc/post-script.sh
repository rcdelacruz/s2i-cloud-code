#!/bin/bash

sed -i '1s/^/require(".\/send-mail");\n/' /opt/app-root/src/cloud/main.js
cp /opt/app-root/etc/send-mail.js /opt/app-root/src/cloud
cp /opt/app-root/etc/adapter.js /opt/app-root/src/cloud
