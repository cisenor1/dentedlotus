import * as React from "react";
// import { LinkedStateMixin } from "react-addons-linked-state-mixin";

export interface UserProps {
    firstName: string;
    lastName: string;
    points: number;

}

export class UserComponent extends React.Component<UserProps, any>{ 
    /**
     *
     */
    constructor(props: UserProps) {
        super(props);
    }

    componentDidMount(): void {

    }

    changed(inValue) {
        this.setState((prevState)=>({
            firstName : inValue.target.value
        }));
        console.log(this.props.firstName);
    }


    render(): JSX.Element | null {
        return <div>
            <div>
                <label>First Name:</label><input type="text" value={this.props.firstName} onChange={this.changed} />
            </div>
            <div>
                <label>Last Name:</label><input type="text" value={this.props.lastName} />
            </div>
            <div>
                <label>Points:</label><input type="text" value={this.props.points} />
            </div>  
        </div>;
    }
}