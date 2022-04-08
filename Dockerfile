FROM node:lts

WORKDIR /app/webdocs

EXPOSE 3000

COPY ./webdocs /app/webdocs

RUN npm install

CMD ["npm", "start"]