FROM node

WORKDIR /usr/src/app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 8080

CMD "npm" "start"
# COPY static-html-directory /usr/share/nginx/html