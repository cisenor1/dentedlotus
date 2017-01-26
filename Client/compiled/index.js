"use strict";
var React = require("react");
var ReactDOM = require("react-dom");
var Banner_1 = require("./components/Banner");
var StateManager_1 = require("./StateManager");
var BlogComponent_1 = require("./components/BlogComponent");
var HeaderSection_1 = require("./components/HeaderSection");
var RaceCountdown_1 = require("./components/widgets/RaceCountdown");
var stateManager = new StateManager_1.StateManager();
ReactDOM.render(React.createElement("div", null,
    React.createElement(Banner_1.Banner, { stateManager: stateManager, title: "Project Dented Lotus" }),
    React.createElement(HeaderSection_1.HeaderSection, { stateManager: stateManager }),
    React.createElement("div", { className: "wrapper" },
        React.createElement("div", null,
            React.createElement(RaceCountdown_1.RaceCountdown, { stateManager: stateManager, displayName: stateManager.nextRace.displayName, cutoffDate: stateManager.nextRace.date }),
            React.createElement(BlogComponent_1.BlogComponent, { stateManager: stateManager })))), document.getElementById("example"));
