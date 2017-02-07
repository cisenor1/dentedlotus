// A lot of the code for this came from https://auth0.com/blog/2016/03/07/hapijs-authentication-secure-your-api-with-json-web-tokens/
// Specifically mostly the code around the security bits.
// To access secured routes, an Authorization header must be set. 
// ex: Authorization: Bearer <TOKEN>
'use strict';
var port = 32187;
var express = require('express');
var app = express();
app.use(express.static("dist"));
var hapi_1 = require("hapi");
var config_1 = require("./app/config");
// Routes import
var races_1 = require("./app/routes/races");
var challenges_1 = require("./app/routes/challenges");
var drivers_1 = require("./app/routes/drivers");
var users_1 = require("./app/routes/users");
var blogs_1 = require("./app/routes/blogs");
// Start the server
var PORT = process.env.PORT || 8080;
app.listen(PORT, function () {
    console.log("App listening on port " + PORT);
    console.log('Press Ctrl+C to quit.');
});
var server = new hapi_1.Server();
server.connection({ port: port });
// Register the JWT middleware for hapi
server.register(require('hapi-auth-jwt'), function (err) {
    // We're giving the strategy both a name
    // and scheme of 'jwt'
    server.auth.strategy('jwt', 'jwt', {
        key: config_1.key,
        verifyOptions: { algorithms: ['HS256'] }
    });
    // Let's make the routes a bit more exlicit instead of implicit
    server.route(races_1.raceRoutes);
    server.route(challenges_1.challengesRoutes);
    server.route(drivers_1.driverRoutes);
    server.route(users_1.userRoutes);
    server.route(blogs_1.blogRoutes);
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
server.start(function (err) {
    if (err) {
        throw err;
    }
    console.log('server running on port ' + port);
});
