Repository for documentation of eol projects

# Docs EOL

## Development

In the project directory you have to run:

### `docker-compose up -d docs-eol`

Runs the app in the development mode. Open http://localhost:3005 to view it in the browser.

## Build production

In the project directory you have to run:

### `docker-compose exec docs-eol bash`
### `npm run build`

The build folder will be ready to be deployed.