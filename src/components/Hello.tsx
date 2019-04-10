import React, { Component, ReactNode } from "react";

export interface HelloProps { 
    compiler: string;
    framework: string;
};
export interface State { };

class Hello extends Component {
    state : State;
    props! : HelloProps;
    constructor(props: HelloProps){ 
        super(props);
        this.state = { };
    }
    render(){
        return (
            <div>
                <h1>
                    Hello from {this.props.compiler} and framework is {this.props.framework}!
                </h1>
            </div>
        );
    }
}
export default Hello;
