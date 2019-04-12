import React, { useState, useEffect } from 'react';
import { MouseEvent, ChangeEvent } from 'react';

import './App.css';

import Player from './components/Player/Player';

import axios from 'axios';
import { AppProps, AppData } from './App.types';
import { AudioC } from './components/Player/Player.types';

declare global {
	interface Window {
		/* any modifications to window */
		GL_BL_DAA: AppData;
	}
};

export const Data: AppData = {
	s: 0,
	api: {
		get   : "http://localhost:3000",
		status: "http://localhost:3000",
	},
};

window.GL_BL_DAA = Data;

// console.log(axios(Data.api.get));

const App = (props: AppProps) => {
	const [title, setTitle] = useState(props.title);
	const [data, setData] = useState(null);
	let [src, setSrc] = useState<AudioC>(new AudioC({src:"junk"}));

	useEffect(()=>{
		(async ()=>{
			console.log("reached here");
			// const data = await axios(Data.api.get);
			const src_ = new AudioC({
				title : "Achhi Muite by Swimy",
				src   :`https://res.cloudinary.com/rootworld/video/upload/v1530081026/\
						soundcloud_acchi_muite_rally_jaxx.mp3`,
			});
			const next1 = new AudioC({
				prev  : src_,
				title : "Obeying Thermodynamics by Homer Simpsons",
				src   : "https://res.cloudinary.com/rootworld/video/upload/v1544685814/sample.wav",
			});
			const next2 = new AudioC({
				prev  : next1,
				title : "Just Awake by Fear,Loathing in LasVegas",
				src   : "https://res.cloudinary.com/rootworld/video/upload/v1522342267/01_-_Just_Awake.mp3",
			});
			/* 
			...
			next2.next = next3;
			*/
			next1.next = next2;
			src_.next = next1;
			setSrc(src_);
		})();
	}, []); /* [] => once after mount */

	useEffect(() => {
		(async () => {
			const result = await axios(Data.api.get);
			setData(result.data);
			console.log("result");
		})();
	}, []); /* pass [] for once */

	useEffect(()=>{
		// const doc : HTMLInputElement = document.querySelector('#dropzone');
		// doc.ondrop = (e:DragEvent)=>{
		// 	var sound : HTMLAudioElement | null = document.querySelector('#sound');
		// 	sound.src = URL.createObjectURL(e.target.files[0]);
		// 	// not really needed in this exact case, but since it is really important in other cases,
		// 	// don't forget to revoke the blobURI when you don't need it
		// 	sound.onend = function(e) {
		// 	  URL.revokeObjectURL(this.src);
		// 	}
		// }
	}, []);

	return (
		<div id="App">
			<Player src={src} analytics={false}/>
			<input type="file" id="dropzone"/>
		</div>
	);
}

export default App;
