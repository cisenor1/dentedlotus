"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var BlogComponent = (function (_super) {
    __extends(BlogComponent, _super);
    /**
     *
     */
    function BlogComponent(props) {
        return _super.call(this, props) || this;
    }
    BlogComponent.prototype.render = function () {
        var out = [];
        this.props.blogs.forEach(function (blog) {
            out.push(React.createElement("li", { className: "blog-entry" },
                React.createElement("div", null,
                    React.createElement("div", { className: "date" }, blog.date),
                    React.createElement("div", { className: "title" }, blog.title),
                    React.createElement("div", { className: "message" }, blog.message),
                    React.createElement("div", { className: "author" }, blog.author))));
        });
        return React.createElement("ul", null, out);
    };
    return BlogComponent;
}(React.Component));
exports.BlogComponent = BlogComponent;
