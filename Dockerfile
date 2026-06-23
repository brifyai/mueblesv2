FROM nginx:alpine

# Copy static nginx configuration directly
COPY default.conf /etc/nginx/conf.d/default.conf

# Copy static website assets
COPY . /usr/share/nginx/html

# Expose standard ports
EXPOSE 80
EXPOSE 4019
