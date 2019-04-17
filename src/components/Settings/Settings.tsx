import React from 'react'
import { RouteComponentProps } from 'react-router';
import { SettingsPageProps } from './Settings.types';
import Settings from '../Player/settings/Settings';

const SettingsPage = (props:SettingsPageProps & RouteComponentProps) => {
    return (
        <div>
            Settings page
            <Settings toxic={"settingspage"}/>
        </div>
    );
};

export default SettingsPage;
