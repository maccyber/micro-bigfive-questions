###########################################################
#
# Dockerfile for micro-bigfive-questions
#
###########################################################

# Setting the base to nodejs 7
FROM mhart/alpine-node:7

# Maintainer
MAINTAINER Jonas Enge

#### Begin setup ####

# Extra tools for native dependencies
# RUN apk add --no-cache make gcc g++ python

# Bundle app source
COPY . /src

# Change working directory
WORKDIR "/src"

# Install dependencies
RUN npm install --production

# Env variables
ENV SERVER_PORT 3000
ENV LIMIT 5

# Expose 3000
EXPOSE ${SERVER_PORT}

# Startup
ENTRYPOINT micro -p ${SERVER_PORT}
