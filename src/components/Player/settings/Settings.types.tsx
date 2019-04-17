import { ServerStatus } from "../../../App.types";

export interface SettingsProps {
    autoplay?    : boolean;
};

export interface SettingsServerResp{
    message     : string;
    settings    : SettingsProps;
    status      : ServerStatus;
    success     : boolean;
};
