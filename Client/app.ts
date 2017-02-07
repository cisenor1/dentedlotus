// A lot of the code for this came from https://auth0.com/blog/2016/03/07/hapijs-authentication-secure-your-api-with-json-web-tokens/
// Specifically mostly the code around the security bits.

// To access secured routes, an Authorization header must be set. 
// ex: Authorization: Bearer <TOKEN>

'use strict';
const port = 32187;

const express = require('express');
const app = express(); 
app.use(express.static("dist"));

import { Server } from "hapi";
import * as glob from "glob";
import * as path from "path";
import { key as secret } from "./app/config";

// Routes import
import { raceRoutes } from "./app/routes/races";
import { challengesRoutes } from "./app/routes/challenges";
import { driverRoutes } from "./app/routes/drivers";
import { userRoutes } from "./app/routes/users";
import { blogRoutes } from "./app/routes/blogs";

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});

const server = new Server();

server.connection({ port: port });

// Register the JWT middleware for hapi
server.register(require('hapi-auth-jwt'), (err) => {
  // We're giving the strategy both a name
  // and scheme of 'jwt'
  server.auth.strategy('jwt', 'jwt', {
    key: secret,
    verifyOptions: { algorithms: ['HS256'] }
  });

  // Let's make the routes a bit more exlicit instead of implicit
  server.route(raceRoutes);
  server.route(challengesRoutes);
  server.route(driverRoutes);
  server.route(userRoutes);
  server.route(blogRoutes);
  // Look through the routes in
  // all the subdirectories of API
  // and create a new route for each
  // glob.sync('./routes/*.js', {
  //   root: __dirname
  // }).forEach(file => {
  //   const route = require(path.join(__dirname, file));
  //   console.log(route);
  //   server.route(route);
  // });
});

server.start((err) => {
  if (err) {
    throw err;
  }
  console.log('server running on port ' + port);
});