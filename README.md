# Back-End Template

This is a Back-End template I use for my projects.
You may change the app name in *package.json* and *package-lock.json*

## Usage

- Go to the project's root folder and run `npm install`.
- Run `npm run dev` to use the app in development mode, using [nodemon](https://nodemon.io/).
- Run `npm start` to use the app in production mode.

## Deployment

- Use `npm run bndLoc` to deploy the Docker container locally.
- Use `npm run bndLive` to send the Docker image to GitLab. You may have to use `Docker login` and set up the registry path in *package.json* beforehand

## Folder structure

Everything happens in the `src` folder:

- *app.ts* is the entry point of the app.
- *Server.ts* holds the Express server.
- *routes*: This folder holds the different routes.

## Main dependencies

- The project is written using [Typescript](typescriptlang.org).
- It uses [Express](https://github.com/expressjs/express) as Node.js web framework.
