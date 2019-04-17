import React, { useContext } from 'react';
import { DetailsProps } from './Details.types';
import { PlayerContext } from '../Player/Player';

const Details = (props:DetailsProps) => {

    const playerData = useContext(PlayerContext);
    const audio = playerData.audio;

    return (
        <div id="details">
            {
                <div className="a-title">
                    {audio && audio.title ? <h2>{audio.title}</h2> : ''}
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
