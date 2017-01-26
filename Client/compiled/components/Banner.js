"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var LoginLogout_1 = require("./widgets/LoginLogout");
var Menu_1 = require("./widgets/Menu");
;
var Banner = (function (_super) {
    __extends(Banner, _super);
    function Banner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Banner.prototype.render = function () {
        return React.createElement("div", { className: "banner" },
            React.createElement("h1", null, this.props.title),
            React.createElement(LoginLogout_1.LoginLogout, { stateManager: this.props.stateManager }),
            React.createElement(Menu_1.Menu, { stateManager: this.props.stateManager }));
    };
    return Banner;
}(React.Component));
exports.Banner = Banner;
