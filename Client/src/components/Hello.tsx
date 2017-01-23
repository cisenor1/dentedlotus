import * as React from "react";

export interface HelloProps { compiler: string; framework?: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export class Hello extends React.Component<HelloProps, any> {
    
    constructor(HelloProps){
        super(HelloProps);
        this.state = { i:0 };
  
    } 
 
    render() {
        return <h1>This is a thing! Man! aasd,.  Test asd {this.props.compiler} and </h1>;
    }
}