FROM node:12-alpine

ARG PROJECT_NAME
ARG VERSION
ARG REVISION

ENV PROJECT_NAME $PROJECT_NAME
ENV VERSION $VERSION
ENV REVISION $REVISION

WORKDIR /app

COPY package*.json ./

RUN npm install --production --quiet

COPY . .

ENTRYPOINT [ "npm" ]

CMD [ "run", "dev" ]
