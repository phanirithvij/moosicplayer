import { MouseEvent } from "react";
import { Singer } from "../../api/Songs.types";

export interface Audiodetails {
	src			: string;
	id			: string;
	title		: string;
	duration?	: number; 
	next?		: Audiodetails;
	prev?		: Audiodetails;
	start?		: number;
	playcount?	: number;
	thumb?		: string;
	singers?	: Singer[];
};

export interface PlayerProps {
	id?			: string;
	src?		: AudioC;
	analytics?	: boolean;
	enabled?	: boolean;
};

export enum PlayState {
	playing, paused
};

export interface PlayerStore{
	playNext	: VoidFunction;
	playPrev	: VoidFunction;
	pausePlay	: (_e: MouseEvent)=>void;
	currBtn		: PlayState;
	audio		: AudioC;
};

export class AudioC implements Audiodetails{
	src			: string;
	id			: string;
	title		: string;
	next?		: AudioC;
	prev?		: AudioC;
	start?		: number;
	thumb?		: string;
	singers?	: Singer[];
	playcount?	: number = 0;
	constructor(data:Audiodetails){
		this.src		= data.src;
		this.id			= data.id;
		this.next		= data.next;
		this.prev		= data.prev;
		this.title		= data.title;
		this.start		= data.start;
		this.thumb		= data.thumb;
		this.singers	= data.singers;
		this.playcount	= data.playcount || 0 ;
	};
};
