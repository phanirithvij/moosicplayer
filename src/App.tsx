import React, { Component } from 'react';
import './App.css';
import Hello from './components/Hello';
import Player from './components/Player/Player';

export interface AppProps { };

class App extends Component {
	props! : AppProps;
	constructor(props: AppProps){
		super(props);

	}
	componentDidMount(){
		fetch("").then();
	}
	render() {
		return (
			<div>
				<Hello compiler="fuck" framework="mofo"/>
				<Player src="" srclist={[]}/>
			</div>
		);
	}
}

export default App;
