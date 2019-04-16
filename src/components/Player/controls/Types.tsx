export interface ControlProps{
    prevBtn     : string;
    currBtn     : string;
    nextBtn     : string;
    playPrev    : VoidFunction;
    playNext    : VoidFunction;
    pausePlay   : (_e: React.MouseEvent<Element, MouseEvent>) => void;
};
