(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "boom", "../utilities/sqliteUtilities"], factory);
    }
})(function (require, exports) {
    'use strict';
    const Boom = require("boom");
    const sqliteUtilities_1 = require("../utilities/sqliteUtilities");
    exports.challengesRoutes = [
        {
            method: 'GET',
            path: '/challenges',
            config: {
                cors: true,
                handler: (request, reply) => {
                    sqliteUtilities_1.getAllChallenges().then(challenges => {
                        reply(challenges);
                    }).catch(error => {
                        reply(Boom.badRequest(error));
                    });
                },
                auth: {
                    strategies: ['jwt'],
                    scope: ['admin']
                }
            }
        },
        {
            method: 'GET',
            path: '/challenges/{season}/{raceKey}/{key?}',
            config: {
                cors: true,
                handler: function (request, reply) {
                    sqliteUtilities_1.getChallenges(request.params["season"], request.params["raceKey"], request.params["key"]).then(challenges => {
                        reply(challenges);
                    });
                },
                auth: {
                    strategies: ['jwt'],
                    scope: ['user']
                }
            }
        },
        {
            method: 'GET',
            path: '/challenges/{season}/{raceKey}/{userKey}/picks/{key?}',
            config: {
                cors: true,
                handler: function (request, reply) {
                    let credentials = request.auth.credentials;
                    if (request.params["userKey"] !== credentials.key) {
                        throw Boom.badRequest("cannot request picks for different user");
                    }
                    sqliteUtilities_1.getUserPicks(request.params["userKey"], request.params["season"], request.params["raceKey"], request.params["key"]).then(picks => {
                        reply(picks);
                    });
                },
                auth: {
                    strategies: ['jwt'],
                    scope: ['user']
                }
            }
        },
        {
            method: 'POST',
            path: '/challenges/{season}/{raceKey}/{userKey}/picks',
            config: {
                cors: true,
                handler: (request, reply) => {
                    let credentials = request.auth.credentials;
                    if (request.params["userKey"] !== credentials.key) {
                        throw Boom.badRequest("cannot save picks for different user");
                    }
                    let picks = [];
                    let season = parseInt(request.params["season"]);
                    let raceKey = request.params["raceKey"];
                    let userKey = request.params["userKey"];
                    if (request.payload) {
                        let restUserPicks = JSON.parse(request.payload);
                        console.log(restUserPicks);
                        if (restUserPicks.length) {
                            restUserPicks.forEach(cdm => {
                                var pick = {
                                    season: season,
                                    raceKey: raceKey,
                                    userKey: userKey,
                                    challengeKey: cdm.key,
                                    choice: cdm.value
                                };
                                picks.push(pick);
                            });
                            sqliteUtilities_1.saveUserPicks(picks).then(success => {
                                reply(success).code(200);
                            });
                        }
                        else {
                            throw Boom.badRequest("no valid picks given to save");
                        }
                    }
                    else {
                        throw Boom.badRequest("no valid picks given to save");
                    }
                },
                auth: {
                    strategies: ['jwt'],
                    scope: ['user']
                }
            }
        }
    ];
});
