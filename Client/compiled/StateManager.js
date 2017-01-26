"use strict";
var bluebird_1 = require("bluebird");
var User_1 = require("./models/User");
var StateManager = (function () {
    function StateManager() {
        this.blogs = [
            {
                author: "Craig",
                date: "Sept. 33rd",
                message: "Today shouldn't exist!",
                title: "but Why!?"
            },
            {
                author: "Derrick",
                date: "Sept. 34th",
                message: "What have we done?!",
                title: "SEPTEMBER!!!"
            }
        ];
        this.nextRace = {
            displayName: "Australian GP",
            date: "March 26, 2017"
        };
        this.currentUser = new User_1.User();
    }
    /**
     *  Query for blog posts.
     *  returns Blog[]
     */
    StateManager.prototype.getBlogs = function (whereClause) {
        return bluebird_1.Promise.resolve(this.blogs.sort(function (a, b) { return b.date.localeCompare(a.date); }));
    };
    StateManager.prototype.getNextRace = function () {
        return bluebird_1.Promise.resolve(this.nextRace);
    };
    /**
     * Get the currently logged in user.
     */
    StateManager.prototype.getUser = function () {
        return bluebird_1.Promise.resolve(this.currentUser);
    };
    return StateManager;
}());
exports.StateManager = StateManager;
