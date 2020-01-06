#!/bin/bash
if [[ $EUID -ne 0 ]]; then
   echo "Usage: sudo ./install.sh"
   exit 1
fi
cp -fT ./etc/ca-certificates.conf /etc/ca-certificates.conf
update-ca-certificates
