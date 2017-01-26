import * as React from "react";
import { PropsBase } from "../../utilities/Utilities";
import { Promise } from "bluebird";
import { User } from "../../models/User";
export interface LoginLogoutProps extends PropsBase { }

export class LoginLogout extends React.Component<LoginLogoutProps, any>{
    /**
     *
     */
    constructor(props: LoginLogoutProps) {
        super(props);
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.state = { loggedIn: false };
    }


    componentDidMount() {
        this.props.stateManager.getUser().then((user: User) => {
            this.setState({ loggedIn: user.isLoggedIn() });
        });
    }
    logout() {
        this.setState({ loggedIn: false });
    }
    login() {
        this.setState({ loggedIn: true });
    }
    render() {
        if (this.state.loggedIn) {
            return <div className="logout"><span  onClick={() => { this.logout() }} >Log Out</span></div>
        } else {
            return <div className="login"><span onClick={() => { this.login() }}>Log In</span></div>
        }
    }
}
