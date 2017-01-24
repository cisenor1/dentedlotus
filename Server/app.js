// A lot of the code for this came from https://auth0.com/blog/2016/03/07/hapijs-authentication-secure-your-api-with-json-web-tokens/
// Specifically mostly the code around the security bits.
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "hapi", "./config", "./routes/races", "./routes/challenges", "./routes/drivers", "./routes/users", "./routes/blogs"], factory);
    }
})(function (require, exports) {
    // To access secured routes, an Authorization header must be set. 
    // ex: Authorization: Bearer <TOKEN>
    'use strict';
    const port = 32187;
    const hapi_1 = require("hapi");
    const config_1 = require("./config");
    // Routes import
    const races_1 = require("./routes/races");
    const challenges_1 = require("./routes/challenges");
    const drivers_1 = require("./routes/drivers");
    const users_1 = require("./routes/users");
    const blogs_1 = require("./routes/blogs");
    const server = new hapi_1.Server();
    server.connection({ port: port });
    // Register the JWT middleware for hapi
    server.register(require('hapi-auth-jwt'), (err) => {
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
    server.start((err) => {
        if (err) {
            throw err;
        }
        console.log('server running on port ' + port);
    });
});
