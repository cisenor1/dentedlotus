"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var Modal = (function (_super) {
    __extends(Modal, _super);
    function Modal(props) {
        var _this = _super.call(this, props) || this;
        _this.stateManager = props.stateManager;
        return _this;
    }
    Modal.prototype.render = function () {
        if (this.stateManager.modalVisible) {
            return React.createElement("div", { className: "modal-backdrop" },
                React.createElement("div", { className: "modal" },
                    React.createElement("div", { className: "g-signin2", "data-onsuccess": "onSignIn" }),
                    React.createElement("div", { className: "fb-login-button", "data-max-rows": "1", "data-size": "large", "data-show-faces": "false", "data-auto-logout-link": "false" })));
        }
        else {
            return React.createElement("div", null);
        }
    };
    return Modal;
}(React.Component));
exports.Modal = Modal;
