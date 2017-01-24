"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var moment = require("moment");
var RaceCountdown = (function (_super) {
    __extends(RaceCountdown, _super);
    /**
     *
     */
    function RaceCountdown(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { timeRemaining: 0 };
        _this.tick = _this.tick.bind(_this);
        return _this;
    }
    RaceCountdown.prototype.componentDidMount = function () {
        this.interval = setInterval(this.tick, 1000);
    };
    RaceCountdown.prototype.componentWillUnmount = function () {
        setInterval(this.interval);
    };
    RaceCountdown.prototype.tick = function () {
        var cutoffTime = moment(this.props.cutoffDate);
        var now = moment();
        var timeRemaining = cutoffTime.diff(now);
        var duration = moment.duration(timeRemaining, "milliseconds");
        var days = Math.floor(duration.asDays());
        var hours = Math.floor(duration.subtract(days, "days").asHours());
        var minutes = Math.floor(duration.subtract(hours, "hours").asMinutes());
        var seconds = Math.floor(duration.subtract(minutes, "minutes").asSeconds());
        var strHours = ("0" + hours.toString()).slice(-2);
        var strMinutes = ("0" + minutes.toString()).slice(-2);
        var strSeconds = ("0" + seconds.toString()).slice(-2);
        var output = "";
        if (days == 1) {
            output += days.toString() + " day ";
        }
        else if (days > 1) {
            output += days.toString() + " days, ";
        }
        output += strHours + ":" + strMinutes + ":" + strSeconds;
        this.setState({ timeRemaining: output });
    };
    RaceCountdown.prototype.render = function () {
        return React.createElement("div", { className: "race-countdown" },
            React.createElement("span", null, this.props.displayName),
            ":",
            React.createElement("span", null, this.state.timeRemaining));
    };
    return RaceCountdown;
}(React.Component));
exports.RaceCountdown = RaceCountdown;
