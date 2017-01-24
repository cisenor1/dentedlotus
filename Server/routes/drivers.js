(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../utilities/sqliteUtilities"], factory);
    }
})(function (require, exports) {
    'use strict';
    const sqliteUtilities_1 = require("../utilities/sqliteUtilities");
    exports.driverRoutes = [
        {
            method: 'GET',
            path: '/drivers/{key?}',
            config: {
                cors: true,
                handler: function (request, reply) {
                    sqliteUtilities_1.getDrivers(false, request.params["key"]).then(drivers => {
                        reply(drivers);
                    });
                }
            }
        },
        {
            method: 'GET',
            path: '/drivers/active/{key?}',
            config: {
                cors: true,
                handler: function (request, reply) {
                    sqliteUtilities_1.getDrivers(true, request.params["key"]).then(drivers => {
                        reply(drivers);
                    });
                }
            }
        }
    ];
});
