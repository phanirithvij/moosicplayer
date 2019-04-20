import React, { useContext, useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router';
import Axios from 'axios';

import "./Playlist.scss";

import { AppProvider, Data } from '../../App';
import { PlaylistProps } from './Playlist.types';
import SongsProvider from '../../api/Songs';
import { Audiodetails, AudioCC } from '../Player/Player.types';

const Playlist = (props:PlaylistProps & RouteComponentProps<{id:string}>) => {
    console.log("playlist props", props);
    
    const [songs, setSongs] = useState();

    const appData = useContext(AppProvider);
    
    useEffect(()=>{
        appData.apiImplemented && (async ()=>{
            if(props.user) {
                const data = await new SongsProvider({user_id:props.user.id});
                data.playlist;
            }
        })();
    }, []);

    const makeCircular = (data:Audiodetails[])=>{
        const clientAudioCC = new SongsProvider({}).converttoAudioCC({data});
        // const 
        return data;
    };

    return (
        <div className="playlist">
            {
                "love ;"
            }
        </div>
    );
};

export default Playlist;
