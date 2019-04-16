import { MouseEvent } from "react";

export interface ControlProps{
    prevBtn     : string;
    currBtn     : string;
    nextBtn     : string;
    playPrev    : VoidFunction;
    playNext    : VoidFunction;
    pausePlay   : (_e: MouseEvent) => void;
};
