FROM node:22-alpine

RUN mkdir -p /web-portfolio/app

COPY ./app /web-portfolio/app

WORKDIR /web-portfolio/app

RUN npm install

RUN npm run build

EXPOSE 3001

CMD ["npm", "run", "serve"]