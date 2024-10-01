FROM node:22-alpine

RUN mkdir -p /web-portofolio/app

COPY ./app /web-portofolio/app

WORKDIR /web-portofolio/app

RUN npm install

RUN npm run build

EXPOSE 3001

CMD ["npm", "run", "serve"]