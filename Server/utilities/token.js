(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "jsonwebtoken", "../config"], factory);
    }
})(function (require, exports) {
    'use strict';
    const jwt = require("jsonwebtoken");
    const config_1 = require("../config");
    function createToken(user) {
        let scopes;
        // Check if the user object passed in
        // has admin set to true, and if so, set
        // scopes to admin
        if (user.role === "admin") {
            scopes = ['admin', 'user'];
        }
        else {
            scopes = ['user'];
        }
        // Sign the JWT
        return jwt.sign({ key: user.key, email: user.email, scope: scopes }, config_1.key, { algorithm: 'HS256', expiresIn: "1h" });
    }
    exports.createToken = createToken;
    function checkAndDecodeToken(token) {
        return new Promise(function (resolve, reject) {
            jwt.verify(token, config_1.key, { algorithms: ['HS256'] }, function (err, payload) {
                // if token alg != RS256,  err == invalid signature
                if (err) {
                    reject(err);
                    return;
                }
                else {
                    resolve(payload);
                }
            });
        });
    }
    exports.checkAndDecodeToken = checkAndDecodeToken;
});
