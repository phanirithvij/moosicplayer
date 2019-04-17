export enum TooltipStatus{
    Success, Error
};

export interface TooltipProps{
    message : string;
    status  : TooltipStatus;
    hidden? : boolean;
};