FROM iojs:latest

WORKDIR /app
ADD . /app

RUN npm install -g gulp
RUN npm install -g bower
RUN npm install -g cucumber

# Expose the ports that your app uses. In Example:
EXPOSE 3000
