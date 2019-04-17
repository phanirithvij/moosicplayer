import React, { useState, useEffect, createContext, useContext } from 'react';
import { MouseEvent } from 'react';

import './Player.css';

import { Appprovider } from '../../App';
import Analytics from '../../utils/Analytics';
import { PlayerProps, AudioC, PlayerStore, PlayState } from './Player.types';

import Details from '../Details/Details';
import Controls from './controls/Controls';
import Settings from './settings/Settings';

const getAud = () : HTMLAudioElement => {
	const aud : HTMLAudioElement | null = document.querySelector('#song');
	if (!aud){
		throw Error("Audio is not here!!");
	}
	return aud;
};

const state : PlayerStore = {
	playNext	: () => { },
	playPrev	: () => { },
	pausePlay	: (_e:MouseEvent) => { },
	currBtn		: PlayState.playing,
	audio		: new AudioC({src:""}),
};

export const PlayerContext = createContext<PlayerStore>(state);

const Player = (props:PlayerProps) => {
	console.log("Player props", props);
	const [audio, setAudio] = useState<AudioC>(new AudioC({src:"placeholder.mp3"}));
	useEffect(()=>{
		(props.src) ? setAudio(props.src) : console.log("No src");
	}, [props.src]);

	const appData = useContext(Appprovider);

	const audioEnded = ()=>{
		const aud = getAud();
		if (audio.next){
			console.log("Play next", audio.next.src);
		}
		setTimeout(() => {
			console.log("next");
			aud.autoplay && playNext(); /* play next only if autoplay is true */
		}, 1000);
	};

	const audioPaused : EventListenerOrEventListenerObject = (e:Event) => {
		const now = performance.now();
		console.log('paused', now);

		/* https://stackoverflow.com/a/48100616/8608146 */
		const audio_ended = (e.currentTarget as HTMLAudioElement).ended;

		setCurrBtn(PlayState.playing);
	};

	const audioPlayed = ()=>{
		const now = performance.now();
		console.log('played', now);
		setCurrBtn(PlayState.paused);
	};

	/*
		const [analyzer, setAnalyzer] = useState(new Analytics());
		// DON'T use this as a new analytics object is getting created after each state update.
	*/
	const [currBtn, setCurrBtn] = useState(PlayState.playing);

	const [analyzer, setAnalyzer] = useState();
	useEffect(()=>{
		(async ()=>{
			const analyzer_ = await new Analytics({enabled:!!props.analytics});
			setAnalyzer(analyzer_);
		})();
	}, []); /* only once */

	useEffect(()=>{
		const aud = getAud();
		aud.addEventListener('pause', audioPaused);
		aud.addEventListener('play', audioPlayed);
	}, []); /* once */
	
	useEffect(()=>{
		const aud = getAud();
		aud.autoplay =
		(appData.settings && appData.settings.autoplay) ?
			appData.settings.autoplay : false; /* AUTOPLAYDEF: false */
	}, [appData.settings && appData.settings.autoplay]); /* when global autoplay settings change */

	useEffect(() => {
		const aud = getAud();
		aud.removeEventListener('ended', audioEnded); /* important */
		aud.addEventListener('ended', audioEnded);
	}, [audio]); /* when audio changes */

	const playNext = ()=>{ /* disable instead of alert */
		const next = audio.next;
		if (next){
			setAudio(next);
		} else {
			// alert("Last song reached");
		}
	};

	const playPrev = ()=>{
		const prev = audio.prev;
		if (prev){
			setAudio(prev);
		} else {
			// alert("First song reached");
		}
	};

	const pausePlay = (_e: MouseEvent)=>{
		const aud = getAud();
		(aud.paused) ? aud.play() : aud.pause();
	};

	const state : PlayerStore = { playNext, pausePlay, playPrev, currBtn, audio };

	return (
		<PlayerContext.Provider value={state}>
			<div id={props.id}>
				{/* wrapper begins */}
				<div id="container">
					<div id="audio-player">
						{
							audio && audio.src ?
							<audio id="song" src={audio.src} controls></audio>
							:
							<p>no audio provided</p>
						}
					</div>
					<Controls />
					<Settings />
				</div>
				{/* wrapper ends */}
				<Details audio={audio}/>
			</div>
		</PlayerContext.Provider>
	);
}

export default Player;
