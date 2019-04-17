import { ServerStatus } from "../../../App.types";

export interface SettingsProps {
    toxic       : string;
    autoplay?   : boolean;
    loop?       : boolean;
    repeat?     : boolean;
};

export interface SettingsServerResp{
    message     : string;
    settings    : SettingsProps;
    status      : ServerStatus;
    success     : boolean;
};
