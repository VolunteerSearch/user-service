FROM node:20

WORKDIR /opt/volunteer-search/user-service

COPY *.json /

RUN npm install --omit=dev

COPY .env /

COPY src /src

CMD [ "npm", "start" ]
