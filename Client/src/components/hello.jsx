define(["require", "exports", "react"], function (require, exports, React) {
    "use strict";
    // 'HelloProps' describes the shape of props.
    // State is never set so we use the 'undefined' type.
    class Hello extends React.Component {
        render() {
            return <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>;
        }
    }
    exports.Hello = Hello;
});
