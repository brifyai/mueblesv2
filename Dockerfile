FROM nginx:alpine

ARG PORT=80
ENV PORT=$PORT

# Copy nginx configuration template
COPY default.conf.template /etc/nginx/templates/default.conf.template

# Copy static website assets
COPY . /usr/share/nginx/html

# Inform Docker that the container listens on the specified port
EXPOSE $PORT
