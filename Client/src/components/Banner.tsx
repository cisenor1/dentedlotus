import * as React from "react";
import { arrayToList } from "../Utilities/Utilities";
import { LoginLogout } from "./widgets/LoginLogout";
import { PropsBase } from "../utilities/Utilities";
import { RaceCountdown } from "./widgets/RaceCountdown";
import * as moment from "moment";
export interface BannerProps extends PropsBase {
    title: string;
};

export class Banner extends React.Component<BannerProps, any>{
    nextRace = {
        displayName: "Australian GP",
        date: "March 26, 2017"
    }
    render() {
        return <div className="banner">
            <h1>{this.props.title}</h1>
            <LoginLogout stateManager={this.props.stateManager} />
            <RaceCountdown stateManager={this.props.stateManager} displayName={this.nextRace.displayName} cutoffDate={this.nextRace.date} />
        </div>;
    }
}