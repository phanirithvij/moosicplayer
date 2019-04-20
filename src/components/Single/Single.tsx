import React, { useContext, useState, useEffect } from 'react'
import { SingleProps, Singleparams } from './Single.types';
import { AppProvider } from '../../App';
import { AudioCC } from '../Player/Player.types';
import Details from '../Details/Details';
import { RouteComponentProps } from 'react-router';

import "./Single.scss";
import SongsProvider from '../../api/Songs';

const Single = (props:SingleProps & RouteComponentProps<Singleparams>) => {

    const [audio, setAudio] = useState<AudioCC>(props.audio);
    const [s404, set404] = useState(false);

    const appData = useContext(AppProvider);

    useEffect(()=>{
        setAudio(props.audio);
    }, []);

    useEffect(()=>{
        const audioF = getAudiofromId(props.match.params.id);
        audioF ? setAudio(audioF) : set404(true);
        console.log("Setting audio single", props);
    }, [props, props.audio, props.match.url]);

    const getAudiofromId = (id:string)=>{
        const id_ = id;
        const provider = new SongsProvider({});
        const data = provider.rawList;
        const audioF = data.data.find((aud)=>{
            return aud.id == id_;
        });
        if (audioF){
            console.log("audioF", audioF);
            return new AudioCC(audioF);
        } else {
            return undefined;
        }
    };

    return (
        <div className="single">
            {
                s404 ?
                <div> No such song exists <a href="">reload?</a> </div> :
                <>
                    <div>
                        { props.match.params.id }
                    </div>
                    <Details audio={audio}/>
                    {/* some memory leak error */}
                </>
            }
        </div>
    );
};

export default Single;
