"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
var Hello = (function (_super) {
    __extends(Hello, _super);
    function Hello(HelloProps) {
        var _this = _super.call(this, HelloProps) || this;
        _this.state = { i: 0 };
        return _this;
    }
    Hello.prototype.render = function () {
        return React.createElement("h1", null,
            "This is a thing! Man! aasd,.  Test asd ",
            this.props.compiler,
            " and ");
    };
    return Hello;
}(React.Component));
exports.Hello = Hello;
