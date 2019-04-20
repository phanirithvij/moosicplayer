import User from "./User";
import { Audiodetails, AudioCC } from "../components/Player/Player.types";

export interface SongsRequestFilters {
    url?            : string;
    user_id?        : string;
    singer_id?      : string;
    search?         : string;
    song_id?        : string;
    playlist_id?    : string;
    similar?        : boolean;
    rawList?        : ServerPlaylist;
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
    songs   : AudioCC; 
};
