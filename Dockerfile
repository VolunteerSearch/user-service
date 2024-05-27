FROM node:20

WORKDIR /opt/volunteer-search/user-service

COPY *.json /
COPY src /src

RUN npm install

CMD [ "npm", "start" ]