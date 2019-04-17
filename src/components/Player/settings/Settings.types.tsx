import { ServerStatus } from "../../../App.types";

export interface SettingsProps {
    autoplay?   : boolean;
    toxic       : string;
};

export interface SettingsServerResp{
    message     : string;
    settings    : SettingsProps;
    status      : ServerStatus;
    success     : boolean;
};
