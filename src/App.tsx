import React, { Component } from 'react';
import './App.css';
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
				<Player src="" srclist={[]}/>
			</div>
		);
	}
}

export default App;
