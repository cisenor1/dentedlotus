import * as React from "react";
import { arrayToList } from "../Utilities/Utilities";
import { Hello } from "./Hello";
export interface BannerProps {
    title: string;
};

export class Banner extends React.Component<BannerProps, any>{
    render() {
        return <div className="banner">
            <h1>{this.props.title}</h1>
        </div>;
    }
}