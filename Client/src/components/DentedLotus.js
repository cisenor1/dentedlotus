"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var Banner_1 = require("./Banner");
var BlogComponent_1 = require("./BlogComponent");
var HeaderSection_1 = require("./HeaderSection");
var RaceCountdown_1 = require("./widgets/RaceCountdown");
var Pages_1 = require("./Pages");
var PageUtilities_1 = require("../utilities/PageUtilities");
var DentedLotus = (function (_super) {
    __extends(DentedLotus, _super);
    /**
     *
     */
    function DentedLotus(props) {
        var _this = _super.call(this, props) || this;
        _this.sidebarStyle = {
            root: {
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                overflow: 'hidden',
            },
            sidebar: {
                zIndex: 2,
                position: 'absolute',
                top: 0,
                bottom: 0,
                transition: 'transform .3s ease-out',
                WebkitTransition: '-webkit-transform .3s ease-out',
                willChange: 'transform',
                overflowY: 'auto',
            },
            content: {
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                overflow: 'auto',
                transition: 'left .3s ease-out, right .3s ease-out',
            },
            overlay: {
                zIndex: 1,
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                opacity: 0,
                visibility: 'hidden',
                transition: 'opacity .3s ease-out',
                backgroundColor: 'rgba(0,0,0,.3)',
            },
            dragHandle: {
                zIndex: 1,
                position: 'fixed',
                top: 0,
                bottom: 0,
            },
        };
        var parameters = PageUtilities_1.getUrlParameters();
        _this.stateManager = props.stateManager;
        _this.state = { parameters: parameters, sidebarOpen: false };
        return _this;
    }
    DentedLotus.prototype.onMenuClicked = function () {
        this.setState({ sidebarOpen: true });
    };
    DentedLotus.prototype.onSetSidebarOpen = function () {
        this.setState({ sidebarOpen: true });
    };
    DentedLotus.prototype.launchRacePicks = function () {
        var parameters = this.state.parameters;
        parameters.page = "race";
        this.setState({ parameters: parameters, race: this.stateManager.getNextRace() });
    };
    DentedLotus.prototype.getCurrentView = function () {
        switch (this.state.parameters.page) {
            case "race":
                return React.createElement(Pages_1.RacePage, { race: this.state.race, small: false });
            case "user":
                return React.createElement("div", null, "User!!!!");
            case "all-races":
                return React.createElement(Pages_1.AllRaces, { races: this.stateManager.races });
            default:
                return this.getHomePage();
        }
    };
    DentedLotus.prototype.getHomePage = function () {
        return React.createElement("div", null,
            React.createElement(RaceCountdown_1.RaceCountdown, { onclick: this.launchRacePicks.bind(this), stateManager: this.stateManager, displayName: this.stateManager.nextRace.displayName, cutoffDate: this.stateManager.nextRace.date }),
            React.createElement(BlogComponent_1.BlogComponent, { stateManager: this.stateManager }));
    };
    DentedLotus.prototype.render = function () {
        return React.createElement("div", null,
            React.createElement(Banner_1.Banner, { stateManager: this.stateManager, title: "Project Dented Lotus", onMenuClicked: this.onMenuClicked }),
            React.createElement(HeaderSection_1.HeaderSection, { stateManager: this.stateManager }),
            React.createElement("div", { className: "wrapper" }, this.getCurrentView()));
    };
    return DentedLotus;
}(React.Component));
exports.DentedLotus = DentedLotus;
