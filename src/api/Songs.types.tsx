import User from "./User";
import { Audiodetails } from "../components/Player/Player.types";

export interface SongsProps {
    url? : string;
    user? : User;
};

export interface ServerPlaylist {
    data : Audiodetails[];
};
