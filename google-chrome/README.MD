This script disables all except the CAs necessary to browse normal websites.

# Background

Google Chrome 79 is including as many as six (6) Chinese certificate authorities!
Not everyone would trust that kind of CA.

# Usage

1. Open a new tab to `chrome://settings/certificates`
2. Click on "Authorities"
3. Open DevTools (F12)
4. Paste the script into the console
5. Wait until it alerts "Trust fixed"

# Mechanism

Chrome doesn't provide an option to distrust all CAs at once, or even a single organization at once. That makes it extremely time-consuming and click-consuming as one needs to click hundreds of times to remove the onslaught of ***extremely*** honest CAs.

All this script does is do the clicking for you.

# Revert (Linux)

Do `rm -rf ~/.pki/nssdb/` . This seems to work because Chrome uses Mozilla NSS on Linux.
