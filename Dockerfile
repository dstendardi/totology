FROM iojs:latest

WORKDIR /app
ADD . /app

# Expose the ports that your app uses. In Example:
EXPOSE 3000
