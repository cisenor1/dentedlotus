"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var UserComponent = (function (_super) {
    __extends(UserComponent, _super);
    /**
     *
     */
    function UserComponent(props) {
        return _super.call(this, props) || this;
    }
    UserComponent.prototype.componentDidMount = function () {
    };
    UserComponent.prototype.changed = function (inValue) {
        this.setState(function (prevState) { return ({
            firstName: inValue.target.value
        }); });
        console.log(this.props.firstName);
    };
    UserComponent.prototype.render = function () {
        return React.createElement("div", null,
            React.createElement("div", null,
                React.createElement("label", null, "First Name:"),
                React.createElement("input", { type: "text", value: this.props.firstName, onChange: this.changed })),
            React.createElement("div", null,
                React.createElement("label", null, "Last Name:"),
                React.createElement("input", { type: "text", value: this.props.lastName })),
            React.createElement("div", null,
                React.createElement("label", null, "Points:"),
                React.createElement("input", { type: "text", value: this.props.points })));
    };
    return UserComponent;
}(React.Component));
exports.UserComponent = UserComponent;
