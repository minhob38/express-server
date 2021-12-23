FROM node:16.13-alpine3.13
MAINTAINER minho <minhob38@gmail.com>
LABEL purpose=my-express-server
WORKDIR /usr/app
COPY . .
RUN npm install && npm run build
EXPOSE 8000
CMD npm run server

# docker build -t my-server-image:latest .
