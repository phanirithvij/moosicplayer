import User from "./User";
import { Audiodetails, AudioC } from "../components/Player/Player.types";

export interface SongsProps {
    url?        : string;
    uploader?   : User;
};

export interface Singer {
    name        : string;
    bandname?   : string;
    thumb?      : string;
    img?        : string;
    id          : string;
};

export interface ServerPlaylist {
    data    : Audiodetails[];
};

export interface PlaylistInfo {
    owner?  : User;
    url?    : string;
    songs   : AudioC; 
};
