import React, { Component, ReactNode } from "react";

export interface HelloProps { 
    compiler: string;
    framework: string;
};
export interface State { };

class Hello extends Component {
    state : State;
    props!: HelloProps;
    constructor(props: HelloProps){ 
        super(props);
        console.log(props);
        this.state = { };
    }
    render(){
        return (
            <div>
                <h1>
                    Hello and framework is react!
                </h1>
            </div>
        );
    }
}
export default Hello;
