"use strict";
var User = (function () {
    function User() {
    }
    User.prototype.isLoggedIn = function () {
        return false;
    };
    return User;
}());
exports.User = User;
