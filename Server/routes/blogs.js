(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    'use strict';
    const db = require('../utilities/sqliteUtilities');
    exports.blogRoutes = [
        {
            method: 'GET',
            path: '/blogs',
            config: {
                cors: true,
                handler: (request, reply) => {
                    db.getBasicUsers().then(basicUsers => {
                        db.getBlogs().then(blogs => {
                            if (blogs && blogs.length > 0 && basicUsers && basicUsers.length > 0) {
                                blogs.forEach(blog => {
                                    var user = basicUsers.filter(basicUser => { return basicUser.key === blog.userKey; })[0];
                                    console.log(user);
                                    if (user) {
                                        blog.userDisplayName = user.displayName;
                                        blog.userKey = undefined;
                                    }
                                });
                            }
                            reply(blogs);
                        });
                    });
                }
            }
        }
    ];
});
