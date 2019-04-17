export enum TooltipStatus{
    Error, Success
};

export interface TooltipProps{
    message : string;
    status  : TooltipStatus;
    hidden? : boolean;
};