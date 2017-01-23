import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";
import { Banner } from "./components/Banner";
import {UserComponent} from "./components/User";
import {StateManager} from "./StateManager";
import {BlogComponent} from "./components/BlogComponent";

let stateManager = new StateManager();

ReactDOM.render(
    <div className="homepage">
    <div className="homepage-message">
        <div className="row">
            <div className="col-md-6 col-sm-12 col-xs-12">
                <div id="header-image" className="panel panel-default">
                    <div className="panel-heading blog-title">Message of the Race</div>
                    <img className="panel-body" data-bind="attr:{'src': imageSource}" />
                    <div className="panel-footer" data-bind="html:quote"></div>
                    <BlogComponent blogs={stateManager.getBlogs()}/>
                </div>
            </div>
            <div id="blog" data-bind="foreach: blogPosts">
                <div className="col-md-3 col-sm-12 col-xs-12">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <span className="blog-title " data-bind="text:title"></span>  
                            <span className="blog-date">D: <span data-bind="text: timestamp"></span></span>
                            <span className="blog-user">By: <span data-bind="text:user.username"></span></span>
                        </div>
                        <div className="panel-body" data-bind="html:message"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>,
    document.getElementById("example")
);