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
    exports.raceRoutes = [
        {
            method: 'GET',
            path: '/races/{season}/{key?}',
            config: {
                cors: true,
                handler: function (request, reply) {
                    sqliteUtilities_1.getRaces(request.params["season"], request.params["key"]).then(races => {
                        reply(races);
                    });
                }
            }
        }
    ];
});
