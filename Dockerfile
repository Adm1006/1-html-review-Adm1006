FROM php:7.4-apache

LABEL maintainer="Tom Gregory"
#Set the working directory in the image
WORKDIR /var/www/html

COPY Apps /srv/Apps

COPY docker/apache/vhost.conf /etc/apache2/sites-available/000-default.conf
