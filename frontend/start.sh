#!/bin/sh

envsubst '${EXAMPLE_SERVER_URL}' < /etc/nginx/nginx.conf.template > /etc/nginx/nginx.conf

nginx -g 'daemon off;'
