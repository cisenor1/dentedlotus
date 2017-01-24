"use strict";
var React = require("react");
var ReactDOM = require("react-dom");
var Banner_1 = require("./components/Banner");
var StateManager_1 = require("./StateManager");
var BlogComponent_1 = require("./components/BlogComponent");
var Menu_1 = require("./components/widgets/Menu");
var stateManager = new StateManager_1.StateManager();
ReactDOM.render(React.createElement("div", null,
    React.createElement("div", { className: "background" }),
    React.createElement(Banner_1.Banner, { stateManager: stateManager, title: "Project Dented Lotus" }),
    React.createElement(Menu_1.Menu, { stateManager: stateManager }),
    React.createElement("div", { className: "homepage" },
        React.createElement("div", null,
            React.createElement(BlogComponent_1.BlogComponent, { stateManager: stateManager })))), document.getElementById("example"));
