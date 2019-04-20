import User from "../../api/User";
import { AudioCC } from "../Player/Player.types";

export interface PlaylistProps{
    user?   : User;
    songs?  : AudioCC;
}