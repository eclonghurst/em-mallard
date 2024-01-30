FROM node:18-alpine
WORKDIR /em-mallard

COPY package.json yarn.lock netlify.toml ./

RUN yarn install

COPY public/ public/
COPY src/ src/
COPY .env.local .env.test tsconfig.json /em-mallard/

EXPOSE 3000

CMD [ "yarn", "start" ]