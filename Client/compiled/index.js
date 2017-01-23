"use strict";
var React = require("react");
var ReactDOM = require("react-dom");
var StateManager_1 = require("./StateManager");
var BlogComponent_1 = require("./components/BlogComponent");
var stateManager = new StateManager_1.StateManager();
ReactDOM.render(React.createElement("div", { className: "homepage" },
    React.createElement("div", { className: "homepage-message" },
        React.createElement("div", { className: "row" },
            React.createElement("div", { className: "col-md-6 col-sm-12 col-xs-12" },
                React.createElement("div", { id: "header-image", className: "panel panel-default" },
                    React.createElement("div", { className: "panel-heading blog-title" }, "Message of the Race"),
                    React.createElement("img", { className: "panel-body", "data-bind": "attr:{'src': imageSource}" }),
                    React.createElement("div", { className: "panel-footer", "data-bind": "html:quote" }),
                    React.createElement(BlogComponent_1.BlogComponent, { blogs: stateManager.getBlogs() }))),
            React.createElement("div", { id: "blog", "data-bind": "foreach: blogPosts" },
                React.createElement("div", { className: "col-md-3 col-sm-12 col-xs-12" },
                    React.createElement("div", { className: "panel panel-default" },
                        React.createElement("div", { className: "panel-heading" },
                            React.createElement("span", { className: "blog-title ", "data-bind": "text:title" }),
                            React.createElement("span", { className: "blog-date" },
                                "D: ",
                                React.createElement("span", { "data-bind": "text: timestamp" })),
                            React.createElement("span", { className: "blog-user" },
                                "By: ",
                                React.createElement("span", { "data-bind": "text:user.username" }))),
                        React.createElement("div", { className: "panel-body", "data-bind": "html:message" }))))))), document.getElementById("example"));
