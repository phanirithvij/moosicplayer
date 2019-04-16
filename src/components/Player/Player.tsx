import React, { useState, useEffect } from 'react';
import { MouseEvent } from 'react';

import './Player.css';

import Analytics from '../../utils/Analytics';
import { PlayerProps, AudioC } from './Player.types';

import pauseBtn from "../../assets/pause.svg";
import playBtn from "../../assets/play.svg";
import prevBtn from "../../assets/left.svg";
import nextBtn from "../../assets/right.svg";
import Details from '../Details/Details';
import Controls from './controls/Controls';

const getAud = () : HTMLAudioElement => {
	const aud : HTMLAudioElement | null = document.querySelector('#song');
	if (!aud){
		throw Error("Audio is not here!!");
	}
	return aud;
};

const Player = (props:PlayerProps) => {
	console.log("Player props", props);
	const [audio, setAudio] = useState<AudioC>(new AudioC({"src":"placeholder.mp3"}));
	useEffect(()=>{
		(props.src) ? setAudio(props.src) : console.log("No src");
	}, [props.src]);

	const [playing, setPlayinig] = useState(false); /* initially false */

	/*
		const [analyzer, setAnalyzer] = useState(new Analytics());
		// DON'T use this as a new analytics object is getting created after each state update.
	*/
	const [currBtn, setCurrBtn] = useState(playBtn);

	const [analyzer, setAnalyzer] = useState<Analytics>();
	useEffect(()=>{
		(async ()=>{
			const analyzer_ = await new Analytics({enabled:!!props.analytics});
			setAnalyzer(analyzer_);
		})();
	}, []); /* only once */

	useEffect(()=>{
		const aud = getAud();
		aud.addEventListener('pause', () => {
			console.log('paused');
			setCurrBtn(playBtn);
			setPlayinig(false);
		});
		aud.addEventListener('play',()=>{
			console.log('played');
			setCurrBtn(pauseBtn);
			setPlayinig(true);
		});
	}, []); /* once */

	const playNext = ()=>{ /* disable instead of alert */
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
		<div id={props.id}>
			{/* wrapper begins */}
			<div id="container">
				<div id="audio-player">
					{
						audio && audio.src ?
						<audio id="song" src={audio.src} autoPlay={playing} controls></audio>
						:
						<p>no audio provided</p>
					}
				</div>
				<Controls
					pausePlay={pausePlay}
					playNext={playNext}
					nextBtn={nextBtn}
					prevBtn={prevBtn}
					playPrev={playPrev}
					currBtn={currBtn}/>
			</div>
			{/* wrapper ends */}
			<Details audio={audio}/>
		</div>
	);
}

export default Player;
