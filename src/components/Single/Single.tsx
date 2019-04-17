import React, { useContext, useState, useEffect } from 'react'
import { SingleProps, Singleparams } from './Single.types';
import { AppProvider } from '../../App';
import { Audiodetails, AudioC } from '../Player/Player.types';
import Details from '../Details/Details';
import { RouteComponentProps } from 'react-router';

import "./Single.scss";

const Single = (props:SingleProps & RouteComponentProps<Singleparams>) => {

    const [audio, setAudio] = useState<AudioC>(props.audio);

    const appData = useContext(AppProvider);

    useEffect(()=>{
        setAudio(audio);
        console.log("Setting audio", props);
    });

    return (
        <div className="single">
            {
                <div>
                    { props.match.params.id }
                </div>
            }
            <Details audio={audio}/>
        </div>
    )
};

export default Single;
