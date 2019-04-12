import React, { useState, useEffect } from 'react';
import { MouseEvent } from "react";
import './App.css';
import Player from './components/Player/Player';

export interface AppProps { };

declare global {
	interface Window { /* any modifications to window */ }
};

const App = (_props: AppProps) => {
	const [ass, setAss] = useState({ p: 0 });
	useEffect(() => {
		document.title = `${ass.p}`;
	}, [ass.p]);
	const plus1 = (e: MouseEvent) => {
		let start = performance.now();
		setAss({ p: ass.p + 1 });
		let end = performance.now();
		console.log(`${end - start} ms`);
	};
	const minus1 = (e: MouseEvent) => {
		let start = performance.now();
		setAss({ p: ass.p - 1 });
		let end = performance.now();
		console.log(`${end - start} ms`);
	};
	const clear = (e: MouseEvent) => {
		let start = performance.now();
		setAss({ p: 0 });
		let end = performance.now();
		console.log(`${end - start} ms`);
	};
	return (
		<div>
			<Player src="" srclist={[]} />
			<button onClick={plus1}>+1</button>
			<button onClick={minus1}>-1</button>
			<button onClick={clear}>clear</button>
		</div>
	);
}

export default App;
