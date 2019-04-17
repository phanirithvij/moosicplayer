import User from "../../api/User";
import { AudioC } from "../Player/Player.types";

export interface PlaylistProps{
    user?   : User;
    songs?  : AudioC;
}