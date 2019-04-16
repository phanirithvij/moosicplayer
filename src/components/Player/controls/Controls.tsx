import React from 'react';
import { ControlProps } from './Contorls.Types';
import "./Controls.css";

const Controls = (props:ControlProps) => {
    const {
        currBtn,
        nextBtn,
        pausePlay,
        playNext,
        playPrev,
        prevBtn
    } = props;
    return (
        <div id="player-controls">
        <div id="prev" className="prev">
            <img src={prevBtn} onClick={playPrev} alt="playprev" style={{maxHeight: "50px"}}/>
        </div>
        <div id="play" className="play">
            <img src={currBtn} onClick={pausePlay} alt="play.pause" style={{maxHeight: "50px"}}/>
        </div>
        <div id="next" className="next">
            <img src={nextBtn} onClick={playNext} alt="playnext" style={{maxHeight: "50px"}}/>
        </div>
    </div>
)
}

export default Controls;
