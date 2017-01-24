(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "joi"], factory);
    }
})(function (require, exports) {
    'use strict';
    const Joi = require("joi");
    exports.authenticateUserSchema = Joi.alternatives().try([
        Joi.object({
            email: Joi.string().email().required(),
            password: Joi.string().required()
        })
    ]);
});
