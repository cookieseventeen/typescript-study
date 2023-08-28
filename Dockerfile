FROM node:20.5.1

RUN mkdir -p /usr/src/typescript-study
COPY dist /usr/src/typescript-study/dist/
COPY data.json /usr/src/typescript-study/
COPY server.js /usr/src/typescript-study/
COPY deploy-package.json /usr/src/typescript-study/package.json

WORKDIR /usr/src/typescript-study

RUN echo 'package-lock=false' >> .npmrc
RUN npm install

EXPOSE 4001

CMD ["node", "server.js"]