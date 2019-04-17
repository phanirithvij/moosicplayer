import React, { useContext } from 'react';
import { ControlProps } from './Contorls.Types';

import { ReactComponent as PrevBtn } from "../../../assets/left.svg";
import { ReactComponent as NextBtn } from "../../../assets/right.svg";

import { ReactComponent as PauseBtn } from "../../../assets/pause.svg";
import { ReactComponent as PlayBtn } from "../../../assets/play.svg";

import { PlayerContext } from '../Player';

import "./Controls.css";
import { PlayState } from '../Player.types';

const Controls = (props:ControlProps) => {

    const player_main = useContext(PlayerContext);

    /* const [,update] = useState(); */
    /*  Use update() to force-update and
        Be aware of the infinite loop
    */
    const prevI = (player_main.audio.prev);
    const nextI = (player_main.audio.next);

    const nextB : SVGSVGElement | null = document.querySelector('#next-btn');
    const prevB : SVGSVGElement | null = document.querySelector('#prev-btn');

    console.log(nextI, prevI);

    if (nextB){
        (!nextI) ? nextB.classList.add("btn-disabled") : nextB.classList.remove("btn-disabled");
    }
    if (prevB){
        (!prevI) ? prevB.classList.add("btn-disabled") : prevB.classList.remove("btn-disabled");
    }

    return (
        <div id="player-controls">
            <div className="prev" onClick={player_main.playPrev}>
                <PrevBtn id="prev-btn" style={{maxHeight: "50px"}}/>
            </div>
            <div id="play-btn" className="play" onClick={player_main.pausePlay}>
                {
                    (player_main.currBtn == PlayState.playing) ?
                    <PlayBtn style={{maxHeight: "50px"}}/>
                    :
                    <PauseBtn style={{maxHeight: "50px"}}/>
                }
            </div>
            <div
                className="next"
                onClick={player_main.playNext}>
                <NextBtn id="next-btn" style={{maxHeight: "50px"}}/>
            </div>
            <button onClick={player_main.playPrev} disabled={!prevI}>prev</button>
            <button onClick={player_main.playNext} disabled={!nextI}>next</button>
        </div>
    )
}

export default Controls;
