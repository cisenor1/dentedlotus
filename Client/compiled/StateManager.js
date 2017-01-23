"use strict";
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
    }
    StateManager.prototype.getBlogs = function () {
        return this.blogs.sort(function (a, b) { return b.date.localeCompare(a.date); });
    };
    return StateManager;
}());
exports.StateManager = StateManager;
