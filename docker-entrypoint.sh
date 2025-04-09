#!/bin/sh
set -e

# Debug: List directory contents
echo "=== Debug: Listing /usr/share/nginx/html contents ==="
ls -la /usr/share/nginx/html
echo "=== Debug: Listing /usr/share/nginx/html/assets contents ==="
ls -la /usr/share/nginx/html/assets
echo "=== Debug: Listing /usr/share/nginx/html/img contents ==="
ls -la /usr/share/nginx/html/img

# Remove default nginx configuration
rm -f /etc/nginx/conf.d/default.conf

# Replace environment variables in nginx configuration
envsubst '${BASE_URL}' < /etc/nginx/conf.d/nginx.conf.template > /etc/nginx/conf.d/default.conf

# Debug: Show generated nginx configuration
echo "=== Debug: Generated nginx configuration ==="
cat /etc/nginx/conf.d/default.conf

# Start nginx
exec nginx -g 'daemon off;' 