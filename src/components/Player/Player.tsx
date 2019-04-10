import React, { Component } from 'react';
import './Player.css';

export interface PlayerProps {
	src? : string,
	srclist: string[]
};

class Player extends Component {
	props! : PlayerProps;
	constructor(props:PlayerProps){
		super(props);
		this.state = {
			meatballs:[],
			player: {}
		};
	}
	render() {
		return (
			<div id="player">
				<div id="audio-player">
					{
						this.props.src ? 
						<audio id="song" src={this.props.src} controls></audio>
						:
						<p>no src provided</p>
					}
				</div>

			</div>
		);
	}
}

export default Player;
