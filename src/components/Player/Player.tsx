import React, { Component, useState, MouseEvent, useEffect } from 'react';
import './Player.css';
import Analytics from '../../utils/Analytics';
import { PlayerProps } from './Player.types';

const getAud = () : HTMLAudioElement => {
	const aud : HTMLAudioElement | null = document.querySelector('#song');
	if (!aud){
		throw Error("Audio is not here!!");
	}
	return aud;
};

const Player = (props:PlayerProps) => {
	const [state, setState] = useState({
		audio : props.src
	});
	const [analyzer, setAnalyzer] = useState(new Analytics());

	useEffect(()=>{
		(async ()=>{
			Analytics
		})();
	}, []);

	const playNext = ()=>{
		const aud = getAud();
		const index = props.srclist.indexOf(props.src);
		changeSrc(props.srclist[index+1], aud);
		if (index + 1 < props.srclist.length){
			setState({
				audio : aud.src
			});
		} else {
			alert("Last song reached");
		}
	};

	const playPrev = ()=>{
		const aud = getAud();
		const index = props.srclist.indexOf(props.src);
		changeSrc(props.srclist[index-1], aud);
		if (index - 1 > 0){
			setState({
				audio : aud.src
			});
		} else {
			alert("First song reached");
		}
	};

	const pausePlay = (_e: MouseEvent)=>{
		const aud = getAud();
		(aud.paused) ? aud.play() : aud.pause();

	};

	const changeSrc = (src:string, aud? : HTMLAudioElement)=>{
		const aud_ = aud || getAud();
		aud_.src = src;
	};

	return (
		<div id="player">
			<div id="audio-player">
				{
					props.src ?
					<audio id="song" src={props.src} controls></audio>
					:
					<p>no src provided</p>
				}
			</div>
			<div id="player-controls">
				<div id="prev" onClick={playPrev}>
					<i className="fa prev"></i>
				</div>
				<div id="play" onClick={pausePlay}>
					<i className="fa play"></i>
				</div>
				<div id="next" onClick={playNext}>
					<i className="fa next"></i>
				</div>
			</div>
		</div>
	);
}

export default Player;
