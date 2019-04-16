export interface Audiodetails {
	title?		: string;
	duration?	: number; 
	src			: string;
	next?		: Audiodetails;
	prev?		: Audiodetails;
	start?		: AudioTimestamp;
	playcount?	: number;
};

export interface PlayerProps {
	id?			: string;
	src?		: AudioC;
	analytics?	: boolean;
	enabled?	: boolean;
};

export class AudioC implements Audiodetails{
	src			: string;
	title?		: string;
	next?		: AudioC;
	prev?		: AudioC;
	start?		: AudioTimestamp;
	playcount?	: number = 0;
	constructor(data:Audiodetails){
		this.src		= data.src;
		this.next		= data.next;
		this.prev		= data.prev;
		this.title		= data.title;
		this.start		= data.start;
		this.playcount	= data.playcount || 0 ;
	};
};
