import React, { useContext } from 'react';

import "./Details.scss";

import { DetailsProps } from './Details.types';
import { PlayerContext } from '../Player/Player';
import { Link } from 'react-router-dom';

import { ReactComponent as HeartSvg } from "../../assets/heart.svg";
import { ReactComponent as MusicNoimgSvg } from "../../assets/music-noimg.svg";
import { ReactComponent as MusicNo2imgSvg } from "../../assets/music-2.svg";

const Details = (props:DetailsProps) => {

    const playerData = useContext(PlayerContext);
    const audio = playerData.audio;

    return (
        <div id="details" className="details">
            {
                <div className="a-thumb">
                    {
                        audio && audio.thumb ?
                        <img
                            src={audio.thumb}
                            className="a-thumb-img a-thumb-small"
                            alt="thumb"/>
                        :
                        <MusicNo2imgSvg className="img-svg"/>
                    }
                </div>
            }
            {
                <div className="a-title">
                    {audio && audio.title ? <Link to={`/s/${audio.id}`}>{audio.title}</Link> : ''}
                </div>
            }
            {
                // <div className="ilu">I <HeartSvg className="heart" /> U</div>
            }
            {/* {
                <div className="a-playc">
                    Playcount : {audio && audio.playcount}
                </div>
            } */}
        </div>

    );
};

export default Details;
