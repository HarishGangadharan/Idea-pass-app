FROM node:10.13.0

# Use bundler cache
ENV NPM_CONFIG_PREFIX=/node_modules

# Set up working directory
ENV APP_HOME=/idea-paas-app

RUN mkdir $APP_HOME
WORKDIR $APP_HOME

ADD . $APP_HOME

RUN npm install