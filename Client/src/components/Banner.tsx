import * as React from "react";
import { arrayToList } from "../Utilities/Utilities";
import { LoginLogout } from "./widgets/LoginLogout";
import { PropsBase } from "../utilities/Utilities";
import { Menu } from "./widgets/Menu";
import * as moment from "moment";
export interface BannerProps extends PropsBase {
    title: string;
};

export class Banner extends React.Component<BannerProps, any>{
    render() {
        return <div className="banner">
            <h1>{this.props.title}</h1>
            <LoginLogout stateManager={this.props.stateManager} />
            <Menu stateManager={this.props.stateManager} />
        </div>;
    }
}