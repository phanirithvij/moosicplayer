import React, { useContext } from 'react';

import "./Details.scss";

import { DetailsProps } from './Details.types';
import { PlayerContext } from '../Player/Player';
import { Link } from 'react-router-dom';

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
                        <img
                            className="a-thumb-img a-thumb-small"
                            src="http://localhost:8096/emby/Items/787/Images/Primary?maxWidth=480&tag=18a1afb9b22525c4c67cf929e17e4faf&quality=90"
                            alt="noimg"
                            />
                    }
                </div>
            }
            {
                <div className="a-title">
                    {audio && audio.title ? <Link to={`/s/${audio.id}`}>{audio.title}</Link> : ''}
                </div>
            }
            {
                <div className="a-playc">
                    Playcount : {audio && audio.playcount}
                </div>
            }
        </div>

    );
};

export default Details;
