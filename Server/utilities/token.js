'use strict';

const jwt = require('jsonwebtoken');
const Promise = require('bluebird');
const secret = require('../config');

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
  return jwt.sign({ key: user.key, email: user.email, scope: scopes }, secret, { algorithm: 'HS256', expiresIn: "1h" } );
}

function checkAndDecodeToken(token) {
    return new Promise(function(resolve, reject) {
        jwt.verify(token, secret, { algorithms: ['HS256'] }, function (err, payload) {
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

module.exports = {
    createToken: createToken,
    checkAndDecodeToken: checkAndDecodeToken
};