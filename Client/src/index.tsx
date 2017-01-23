import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";
import { Banner } from "./components/Banner";

ReactDOM.render(
    <div>
        <Banner title="Project Dented Lotus" />
        <Hello compiler="ASDA" />
    </div>,
    document.getElementById("example")
);