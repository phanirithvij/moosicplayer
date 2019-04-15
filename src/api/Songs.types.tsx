import User from "./User";
import { Audiodetails } from "../components/Player/Player.types";

export interface SongsProps {
    url?        : string;
    uploader?   : User;
};

export interface ServerPlaylist {
    data    : Audiodetails[];
};

export interface PlaylistInfo {
    owner?  : User;
    url?    : string;

}