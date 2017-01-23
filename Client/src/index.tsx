import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";
import { Banner } from "./components/Banner";
import {UserComponent} from "./components/User";

ReactDOM.render(
    <div>
        <Banner title="Project Dented Lotus" />
        <UserComponent firstName="Craig" lastName="Isenor" points={1} /> 
        <Hello compiler="ASDA" />
    </div>,
    document.getElementById("example")
);