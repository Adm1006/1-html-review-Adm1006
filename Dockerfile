FROM php:7.4-apache

LABEL maintainer="Tom Gregory"

COPY Apps /srv/Apps

COPY docker/apache/vhost.conf /etc/apache2/sites-available/000-default.conf
