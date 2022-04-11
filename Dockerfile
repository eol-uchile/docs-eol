FROM node:lts as dev

WORKDIR /app/webdocs

COPY ./webdocs /app/webdocs

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]

# Production layers

FROM dev as prod

RUN npm run build

FROM node:lts as static

COPY --from=prod /webdocs/build /app/webdocs/build

EXPOSE 3000

CMD ["npm", "run", "serve"]