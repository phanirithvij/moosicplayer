import React, { useContext, useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import Axios from 'axios';

import { AppProvider, Data } from '../../App';
import { PlaylistProps } from './Playlist.types';
import { ServerPlaylist } from '../../api/Songs.types';

const Playlist = (props:PlaylistProps & RouteComponentProps<{id:string}>) => {
    const appData = useContext(AppProvider);
    useEffect(()=>{
        appData.apiImplemented && (async ()=>{
            if(props.user) {
                const { data } = await Axios.get<ServerPlaylist>(Data.api.get);
            }
        })();
    });
    console.log("playlist props", props);
    return (
        <div className="playlist">
            {
                "love ;"
            }
        </div>
    );
};

export default Playlist;
