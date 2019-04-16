import Player from "../components/Player/Player";
import { PlayerProps } from "../components/Player/Player.types";
import React from "react";

export const renderPlayer = (props:PlayerProps)=>{
    return (
        <Player {...props} />
    );
};