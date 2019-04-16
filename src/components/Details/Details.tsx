import React from 'react';
import { DetailsProps } from './Details.types';

const Details = (props:DetailsProps) => {
    const audio = props.audio;
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
