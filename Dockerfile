FROM iojs:latest

WORKDIR /app
ADD . /app

RUN npm install
RUN npm install -g gulp bower cucumber

# Expose the ports that your app uses. In Example:
EXPOSE 3000
