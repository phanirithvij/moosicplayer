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
	src?		: AudioCC;
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
	audio		: AudioCC;
};

export class AudioS implements Audiodetails {
	src			: string;
	id			: string;
	title		: string;
	next?		: AudioS;
	prev?		: AudioS;
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

export class AudioCC extends AudioS {
	next?		: AudioCC;
	prev?		: AudioCC;
	backupid	: string;
	count		: number = 0;
	private _circlecount : number = 0;
	private _circular : boolean = false;
	constructor(data:Audiodetails){
		super(data);
		this.backupid = data.id;
		if (data.next)
		this.next = new AudioCC(data.next);
		if (data.prev)
		this.prev = new AudioCC(data.prev);
	}

	get circular(){
		return this._circular;
	}

	set circular(cir:boolean){
		if (cir){
			/* if true make circular */
			this.last = this.first;
		} else {
			// uncircle it based on backup id

		}
		this.count++;
		this._circular = cir;
	}

	get first(){
		return this;
	}
	set first(audio:AudioCC){
		this.prev = audio;
		this.first = audio;
		console.log("same?",this == audio);
	}

	get last(){
		if (!this.circular){
			console.log("not cir");
			var last : AudioCC = this;
			while(true){
				console.log("counter ", this.count, "id ", last.id);
				if (!last.next || this.count > 100){
					// this.count = 0;
					console.log("count = 0");
					break;
				}
				if (!this.circular && last.id == this.backupid){
					this._circlecount++;
					if (this._circlecount == 2){
						last.next = undefined;
						break;
					}
				}
				this.count++;
				last = last.next;
			}
			return last;
		} else {
			return this;
		}
	}
	set last(audio:AudioCC){
		if (audio == this.first){
			this._circular = true;
		} /* is same is set make it circular */
		this.last.append(audio); /* get last called */
	}

	public append(data:AudioCC,index?:number){
		if (!index){
			var curr : AudioCC = this; /* typescript bug if : AudioCC is removed */
			var i = 0;
			while(true){
				i++;
				if (curr.next){
					// console.log(curr.id, i);
					curr = curr.next;
				} else if (i > 1000) {
					console.log("no next", i);
					curr.next = data;
					break;
				}
			}
		}
	}
};
