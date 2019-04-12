import React, { useState, useEffect } from 'react';
import { MouseEvent } from 'react';

import './Player.css';

import Analytics from '../../utils/Analytics';
import { PlayerProps, AudioC } from './Player.types';

import pauseBtn from "../../assets/pause.svg";
import playBtn from "../../assets/play.svg";
import prevBtn from "../../assets/left.svg";
import nextBtn from "../../assets/right.svg";

const getAud = () : HTMLAudioElement => {
	const aud : HTMLAudioElement | null = document.querySelector('#song');
	if (!aud){
		throw Error("Audio is not here!!");
	}
	return aud;
};

const Player = (props:PlayerProps) => {
	const [audio, setAudio] = useState<AudioC>(new AudioC({"src":"placeholder.mp3"}));
	useEffect(()=>{
		setAudio(props.src);
	}, [props.src]);
	console.log("fresh player:", props);
	/* 
		const [analyzer, setAnalyzer] = useState(new Analytics());
		// DON'T use this as a new analytics object is getting created after each state update.
	*/
	const [currBtn, setCurrBtn] = useState(pauseBtn);

	const [analyzer, setAnalyzer] = useState<Analytics>();
	useEffect(()=>{
		(async ()=>{
			const analyzer_ = await new Analytics({enabled:!!props.analytics});
			setAnalyzer(analyzer_);
		})();
	}, []); /* only once */

	useEffect(()=>{
		const aud = getAud();
		aud.onpause = () => {
			console.log('paused');
			setCurrBtn(playBtn);
		};
		aud.onplay  = ()=>{
			console.log('played');
			setCurrBtn(pauseBtn);
		};
	}, []); /* once */

	const playNext = ()=>{
		const next = audio.next;
		if (next){
			setAudio(next);
		} else {
			alert("Last song reached");
		}
	};

	const playPrev = ()=>{
		const prev = audio.prev;
		if (prev){
			setAudio(prev);
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
			{/* wrapper begins */}
			<div id="container">
				<div id="audio-player">
					{
						audio.src ?
						<audio id="song" src={audio.src} autoPlay controls></audio>
						:
						<p>no audio provided</p>
					}
				</div>
				<div id="player-controls">
					<div id="prev">
						<img src={prevBtn} onClick={playPrev} alt="playprev" style={{maxHeight: "50px"}}/>
					</div>
					<div id="play">
						<img src={currBtn} onClick={pausePlay} alt="play.pause" style={{maxHeight: "50px"}}/>
					</div>
					<div id="next">
						<img src={nextBtn} onClick={playNext} alt="playnext" style={{maxHeight: "50px"}}/>
					</div>
				</div>
			</div>
			{/* wrapper ends */}
			{/* details begins */}
			<div id="details">
				{
					audio.title ? <h2>{audio.title}</h2> : ''
				}
			</div>
			{/* details ends */}
		</div>
	);
}

export default Player;
