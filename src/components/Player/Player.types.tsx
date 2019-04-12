export interface Audiodetails {
	title?    : string;
	duration? : number; 
	src       : string;
	next?     : Audiodetails;
	prev?     : Audiodetails;
	start?    : AudioTimestamp;
};

export interface PlayerProps {
	src : AudioC;
	analytics?: boolean;
};

export class AudioC implements Audiodetails{
	src    : string;
	title? : string;
	next?  : AudioC;
	prev?  : AudioC;
	start? : AudioTimestamp;
	constructor(data:Audiodetails){
		this.src = data.src;
		this.next = data.next;
		this.prev = data.prev;
		this.title = data.title;
		this.start = data.start;
	}
}