import React, { useContext, ChangeEvent, useEffect } from 'react';
import Axios from 'axios';

import { SettingsProps } from './Settings.types';
import { AppProvider } from '../../../App';

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
        (e.target.id == "aplay") ? appData.updateSettings({autoplay:e.currentTarget.checked}) : null;
    };

    return (
        <div>
            AutoPlay
            <input
                type="checkbox"
                name="aplay"
                id="aplay"
                defaultChecked={false}
                onChange={updateSettings}/>
        </div>
    );
};

export default Settings;