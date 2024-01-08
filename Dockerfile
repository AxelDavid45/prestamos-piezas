FROM node:18-alpine AS build

WORKDIR /usr/src/app

COPY --chown=node:node . .

RUN npm ci && npm run build

FROM node:18-alpine
ENV NODE_ENV production

RUN apk add dumb-init \
  && rm -rf /var/cache/apk/*

WORKDIR /usr/src/app

COPY --chown=node:node package*.json .
RUN npm ci --omit=dev

COPY --chown=node:node --from=build /usr/src/app/dist ./dist

EXPOSE 9000
CMD ["dumb-init", "node", "./dist/main.js"]
