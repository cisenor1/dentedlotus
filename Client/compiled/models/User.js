"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="../../typings/globals/fb/index.d.ts" />  
var User = (function () {
    function User() {
        this._loggedIn = false;
    }
    User.prototype.isLoggedIn = function () {
        return this._loggedIn;
    };
    User.prototype.getName = function () {
        return this.firstName + " " + this.lastName.substr(0, 1) + ".";
    };
    User.prototype.logOut = function () {
    };
    User.prototype.logIn = function () {
    };
    return User;
}());
exports.User = User;
var GoogleUser = (function (_super) {
    __extends(GoogleUser, _super);
    function GoogleUser(googleUser) {
        var _this = _super.call(this) || this;
        var profile = googleUser.getBasicProfile();
        _this.email = profile.getEmail();
        _this.firstName = profile.getGivenName();
        _this.lastName = profile.getFamilyName();
        _this.imageUrl = profile.getImageUrl();
        _this._loggedIn = true;
        return _this;
        // console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
        // console.log('Name: ' + profile.getName());
        // console.log('Image URL: ' + profile.getImageUrl());
        // console.log('Email: ' + profile.getEmail());     
    }
    GoogleUser.prototype.logOut = function () {
        var auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(function () {
            console.log('User signed out.');
        });
    };
    return GoogleUser;
}(User));
exports.GoogleUser = GoogleUser;
var FacebookUser = (function (_super) {
    __extends(FacebookUser, _super);
    function FacebookUser(fbResponse) {
        var _this = _super.call(this) || this;
        _this.authToken = fbResponse.authResponse.accessToken;
        FB.api('/me', function (response) {
            console.log('Successful login for: ' + response.first_name);
        });
        return _this;
    }
    FacebookUser.prototype.logOut = function () {
        var _this = this;
        FB.logout(function (response) {
            _this._loggedIn = false;
        });
    };
    return FacebookUser;
}(User));
exports.FacebookUser = FacebookUser;
