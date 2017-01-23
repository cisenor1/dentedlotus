"use strict";
var React = require("react");
var ReactDOM = require("react-dom");
var Hello_1 = require("./components/Hello");
var Banner_1 = require("./components/Banner");
ReactDOM.render(React.createElement("div", null,
    React.createElement(Banner_1.Banner, { title: "Project Dented Lotus" }),
    React.createElement(Hello_1.Hello, { compiler: "ASDA" })), document.getElementById("example"));
