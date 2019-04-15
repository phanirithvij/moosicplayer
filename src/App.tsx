import React, { useState, useEffect } from 'react';
import { MouseEvent, ChangeEvent } from 'react';

import './App.css';

import Player from './components/Player/Player';

import axios from 'axios';
import { AppProps, AppData } from './App.types';
import { AudioC } from './components/Player/Player.types';
import User from './api/User';
import { useCookies } from 'react-cookie';

import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Hello from './docs/Hello';
import SongsProvider from './api/Songs';

declare global {
	interface Window {
		/* any modifications to window */
		GL_BL_DAA?: AppData;
		kookie?: Object;
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
	const [cooky, setCooky, rmCooky] = useCookies(['fuck']);

	useEffect(() => {
		(async () => {
			// const result = await axios(Data.api.get);
			// setData(result.data);
			// console.log("result");
			const provider = new SongsProvider();
			const data = provider.playlist;
			setSrc(data);
		})();
	}, []); /* pass [] for once i.e. componentdidmount */

	useEffect(() => {
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

	useEffect(() => {
		/* get user from cookies */
		(async () => {
			let user = await new User();
			console.log(user);
			window.kookie = { cooky, setCooky, rmCooky };
			if (!cooky["uzer"]) {
				/* logged out */
				
				/* setCooky("uzer", "all I know", { path: "/", maxAge: 20000 }); */
			} else {
				/* logged in */
			};
		})();
	}, []);

	return (
		<Router>
			<div id="App">
				{/* <Route exact path="/" component={App} /> */}
				<Switch>
					<Route exact path="/:p/:id" component={Player} />
					<Route exact path="/hello/:id" component={Hello} />
				</Switch>
				{/* <Route exact path="/" component={App} /> */}
				<Player src={src} analytics={false} />
			</div>
		</Router>
	);
}

const ass = "Router";

export default App;
