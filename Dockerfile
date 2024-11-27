FROM nginx:1.23.1-alpine
EXPOSE 3000
COPY ./docker/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf
# COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf // just for testing locally
COPY ./dist /usr/share/nginx/html