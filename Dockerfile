
FROM ruby:3.1.0-slim-bullseye

RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    libpq-dev \
    git \
  && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

# Node
RUN apt update && apt install -y curl
RUN curl -fsSL https://deb.nodesource.com/setup_17.x | bash -
RUN apt update
RUN apt install -y nodejs

# Yarn
RUN npm install --global yarn

WORKDIR /usr/src/app
EXPOSE 3000