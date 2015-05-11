FROM iojs:latest

RUN useradd -ms /bin/bash app
USER app
WORKDIR /app
ADD . /app

# Expose the ports that your app uses. In Example:
EXPOSE 3000
