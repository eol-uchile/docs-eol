FROM node:lts as base

# Reduce npm log spam and colour during install within Docker
ENV NPM_CONFIG_LOGLEVEL=warn
ENV NPM_CONFIG_COLOR=false

WORKDIR /app

# Copy the source code over
COPY --chown=node:node . /app/

## Development #################################################################
FROM base as development
WORKDIR /app
# Install (not ci) with dependencies, and for Linux vs. Linux Musl (which we use for -alpine)
RUN npm install
# Switch to the node user vs. root
USER node
# Expose port 3000
EXPOSE 3000
# Start the app in debug mode so we can attach the debugger
CMD ["npm", "start"]


## Production ##################################################################
FROM base as production

WORKDIR /app

COPY --chown=node:node --from=development /app/node_modules /app/node_modules

# Build the Docusaurus app
RUN npm run build

COPY . /app

CMD ["npm", "run", "serve"]