import React, { useState, useEffect } from 'react';
import { MouseEvent, ChangeEvent } from 'react';

import './App.css';

import Player from './components/Player/Player';

import axios from 'axios';
import { AppProps, AppData } from './utils/Interfaces';

declare global {
	interface Window {
		/* any modifications to window */
		Data: AppData;
	}
};

export const Data: AppData = {
	s: 0,
	api: {
		get   : "http://localhost:3000",
		status: "http://localhost:3000",
	},
};

window.Data = Data;

console.log(axios(Data.api.get));

const App = (props: AppProps) => {
	const [title, setTitle] = useState(props.title);
	const [data, setData] = useState({});
	const [src, setSrc] = useState(
		"https://res.cloudinary.com/rootworld/video/upload/v1530081026/soundcloud_acchi_muite_rally_jaxx.mp3"
	);
	const [srclist, setSrclist] = useState([
		"https://res.cloudinary.com/rootworld/video/upload/v1530081026/soundcloud_acchi_muite_rally_jaxx.mp3",
		"https://res.cloudinary.com/rootworld/video/upload/v1544685814/sample.wav",
	]);

	useEffect(() => {
		(async () => {
			const result = await axios(Data.api.get);
			setData(result.data);
			console.log(result);
		})();
	}, []); /* pass [] for once */

	useEffect(() => {
		document.title = `${title}`;
		var s = Data.s;
		Data.s++;
		console.log(Data.s);
	}, [title]);

	const clear = (_e: MouseEvent) => {
		let start = performance.now();
		setTitle("clearing...");
		let end = performance.now();
		console.log(`${end - start} ms`);
		setTitle(props.title);
	};

	const textChanged = (e: ChangeEvent<HTMLInputElement>) => {
		var val = e.target.value;
		setSrc(val);
	};

	return (
		<div>
			<Player
				src={src}
				srclist={srclist} />
			<button onClick={clear}>clear</button>
			<input onChange={textChanged} type="text" name="boo" id="boo" />
		</div>
	);
}

export default App;
