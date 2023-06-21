FROM node:18


WORKDIR /usr/app

COPY  ./app/src /usr/app/src/
COPY ./app/public  /usr/app/public/
COPY ./app/package.json /usr/app/package.json

RUN npm install

ENV PORT 3000


ENTRYPOINT ['/bin/bash']
