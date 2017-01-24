"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var LoginLogout = (function (_super) {
    __extends(LoginLogout, _super);
    /**
     *
     */
    function LoginLogout(props) {
        var _this = _super.call(this, props) || this;
        _this.login = _this.login.bind(_this);
        _this.logout = _this.logout.bind(_this);
        _this.state = { loggedIn: false };
        return _this;
    }
    LoginLogout.prototype.componentDidMount = function () {
        var _this = this;
        this.props.stateManager.getUser().then(function (user) {
            _this.setState({ loggedIn: user.isLoggedIn() });
        });
    };
    LoginLogout.prototype.logout = function () {
        this.setState({ loggedIn: false });
    };
    LoginLogout.prototype.login = function () {
        this.setState({ loggedIn: true });
    };
    LoginLogout.prototype.render = function () {
        var _this = this;
        if (this.state.loggedIn) {
            return React.createElement("div", { className: "logout" },
                React.createElement("button", { onClick: function () { _this.logout(); } }, "Log Out"));
        }
        else {
            return React.createElement("div", { className: "login" },
                React.createElement("button", { onClick: function () { _this.login(); } }, "Log In"));
        }
    };
    return LoginLogout;
}(React.Component));
exports.LoginLogout = LoginLogout;
