import * as React from "react";
import * as ReactDOM from "react-dom";

import { Banner } from "./components/Banner";
import { UserComponent } from "./components/User";
import { StateManager } from "./StateManager";
import { BlogComponent } from "./components/BlogComponent";
import { HeaderSection } from "./components/HeaderSection";
import { RaceCountdown } from "./components/widgets/RaceCountdown";

let stateManager = new StateManager();

ReactDOM.render(
    <div>
        <Banner stateManager={stateManager} title="Project Dented Lotus" />
        <HeaderSection stateManager={stateManager} />
        <div className="wrapper">
            <div>
                <RaceCountdown stateManager={stateManager} displayName={stateManager.nextRace.displayName} cutoffDate={stateManager.nextRace.date} />
                <BlogComponent stateManager={stateManager} />
            </div>
        </div>
    </div>,
    document.getElementById("example")
);