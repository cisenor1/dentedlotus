import * as React from "react";
import * as ReactDOM from "react-dom";
 
import { Banner } from "./components/Banner";
import { UserComponent } from "./components/User";
import { StateManager } from "./StateManager";
import { BlogComponent } from "./components/BlogComponent";
import {Menu} from "./components/widgets/Menu";

let stateManager = new StateManager();

ReactDOM.render(
    <div>
        <div className="background"></div>
        <Banner stateManager={stateManager} title="Project Dented Lotus" />
        <Menu stateManager={stateManager} />
        <div className="homepage">
            <div>
                <BlogComponent stateManager={stateManager} />
            </div>
        </div>
    </div>,
    document.getElementById("example")
);