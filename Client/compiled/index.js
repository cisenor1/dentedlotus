"use strict";
var React = require("react");
var ReactDOM = require("react-dom");
var Hello_1 = require("./components/Hello");
var Banner_1 = require("./components/Banner");
var User_1 = require("./components/User");
ReactDOM.render(React.createElement("div", null,
    React.createElement(Banner_1.Banner, { title: "Project Dented Lotus" }),
    React.createElement(User_1.UserComponent, { firstName: "Craig", lastName: "Isenor", points: 1 }),
    React.createElement(Hello_1.Hello, { compiler: "ASDA" })), document.getElementById("example"));
