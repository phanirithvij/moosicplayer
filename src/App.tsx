import React, { useState, useEffect, createContext, useContext } from 'react';

import './App.css';

import Player from './components/Player/Player';

import axios from 'axios';
import { AppProps, AppData, Appstore } from './App.types';
import { AudioC } from './components/Player/Player.types';
import User from './api/User';
import { useCookies } from 'react-cookie';

import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Hello from './docs/Hello';
import SongsProvider from './api/Songs';
import { SettingsProps, SettingsServerResp } from './components/Player/settings/Settings.types';
import Tooltip, { TooltipProvider } from './components/Tooltip/Tooltip';
import { TooltipStatus } from './components/Tooltip/Tooltip.types';

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
		get		: "http://localhost:3000",
		status	: "http://localhost:3000",
		post	: "http://localhost:3000"
	},
};

window.GL_BL_DAA = Data;

const tempStore : Appstore = {
	settings		: {autoplay:true},
	updateSettings	: (_sett:SettingsProps)=>{},
	apiImplemented	: false,
	userInfo		: {},
	updateUserinfo	: ()=>{},
	api				: {
		get		: "http://localhost:3000",
		status	: "http://localhost:3000",
		post	: "http://localhost:3000"
	},
	emojis			: "",
	assets			: {
		tooltip	: {
			alt_error	: "",
			alt_success	: "",
			error		: "",
			success		: "",
		},
		updateTooltip : ()=>{}
	},
};

export const Appprovider = createContext<Appstore>(tempStore);

const App = (props: AppProps) => {

	let [src, setSrc] = useState<AudioC>(new AudioC({src:"invalid-mp3"}));
	const [cooky, setCooky, rmCooky] = useCookies(['duck']);
	const [settings, setSettings] = useState<SettingsProps>({autoplay:false});
	console.log("Settings App level", settings);
	
	useEffect(() => {
		(async () => {
			const provider = new SongsProvider();
			const data = provider.playlist;
			setSrc(data);
		})();
	}, []); /* pass [] for once i.e. componentdidmount */

	const tooltip = useContext(TooltipProvider);
	window["ttip"] = tooltip;
	
	const updateSettings = (sett:SettingsProps)=>{
		setSettings(sett);
		const settings_post = appState.api.post + "/settings";
		(async ()=>{
			if (appState.apiImplemented){
				const { data } = await axios.post<SettingsServerResp>(settings_post, sett);
				if (data.success){
					/* show a saved message */
					tooltip.setMessage();
					tooltip.show();
					setTimeout(() => {
						tooltip.hide()
					}, 2000);
				} else {
					/* show a failed message */
				}
			}
		})();
	};

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

	const appState : Appstore = {...tempStore, settings, updateSettings};

	return (
		<Appprovider.Provider value={appState}>
			<Router>
				<div id="App">
					<Switch>
						<Route
							exact
							path="/:xD/:id"
							component={Player}/>
						<Route exact path="/hello/:id" component={Hello} />
					</Switch>
					<Player src={src} analytics={false} enabled={false} />
					<Tooltip
						message={tooltip.message}
						status={tooltip.status}/>
				</div>
			</Router>
		</Appprovider.Provider>
	);
}

export default App;
