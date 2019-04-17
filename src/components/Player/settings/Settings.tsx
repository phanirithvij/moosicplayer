import React, { useContext, ChangeEvent, useEffect, useState } from 'react';
import Axios from 'axios';

import { SettingsProps } from './Settings.types';
import { AppProvider } from '../../../App';

import "./Settings.scss";

import User from '../../../api/User';

const Settings = (props? : SettingsProps) => {

    const fetchUserSettings = (local?:boolean, userData?:User)=>{
        (async ()=>{
            if (!userData) {
                const { data } = await Axios.get<SettingsProps>(appData.api.get);
                console.log("No user default settings", data);
                appData.updateSettings(data);
            } else {
                const { data } = await Axios.post<SettingsProps>(appData.api.post, userData);
                appData.updateSettings(data);
            }
        })();
    };

    const appData = useContext(AppProvider);

    const currSettings = appData.settings;
    const aplay = (currSettings && currSettings.autoplay) ? currSettings.autoplay : false;

    const [autoplay, setAutoplay] = useState<boolean>(aplay);

    useEffect(()=>{
        console.log("Autoplay is", autoplay, props && props.toxic);
    });


    useEffect(()=>{
        if (appData.apiImplemented) {
            if (appData.userInfo){
                fetchUserSettings();
            } else {
                /* use localstorage to get settings */
            }
        }
        else {
            console.log("Api not implemented");
        }
    },[]); /* must do it once => no deps */

    const updateSettings = (e: ChangeEvent<HTMLInputElement>)=>{
        if (e.target.id == "aplay") {
            setAutoplay(!autoplay);
            appData.updateSettings({/* ...appData.settings,  */autoplay:!autoplay, toxic : "updatesettings"});
        }
    };

    return (
        <div className="player_settings">
            AutoPlay
            <input
                type="checkbox"
                name="aplay"
                id="aplay"
                // defaultChecked={false}
                checked={autoplay}
                onChange={updateSettings}/>
        </div>
    );
};

export default Settings;