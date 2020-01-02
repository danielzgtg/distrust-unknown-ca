This is my configuration file for ca-certificates.
It only selects the necessary CAs.

# Usage

1. Copy the file to `/etc/ca-certificates.conf`
2. Run `sudo dpkg-reconfigure ca-certificates` and disable "Trust new certificates from certificate authorities."
