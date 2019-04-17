import React, {
    useContext,
    FunctionComponent,
    SVGProps,
    useEffect,
    useState,
    createContext
} from 'react';

import { AppProvider } from '../../App';
import { TooltipProps, TooltipStatus } from './Tooltip.types';

import { ReactComponent as successSvg } from "../../assets/success.svg";
import { ReactComponent as errorSvg } from "../../assets/error.svg";

import "./Tooltip.css";

declare global{
    interface Element{
        hidden? : boolean;
    }
};

export type SVG = FunctionComponent<SVGProps<SVGSVGElement>>;

export const defaultD = {
    message     : "",
    status      : TooltipStatus.Success,
    setMessage  : (mess:string)=>{ },
    setStatus   : (stat:TooltipStatus)=>{ },
    hide        : ()=>{ },
    show        : ()=>{ },
};

export const TooltipProvider = createContext(defaultD);

const Tooltip = (props:TooltipProps) => {

    const assets = useContext(AppProvider).assets;

    const getImage = (p:TooltipProps) => {
        let image   : SVG = successSvg;
        let class_     : string = "success";
        switch (p.status) {
            case TooltipStatus.Error:
                image   = errorSvg;
                class_  = "error";
                break;
            default:
                break;
        }
        return [image, class_];
    };

    const show = ()=>{
        setHidden(false);
    };

    const hide = ()=>{
        setHidden(true);
    };

    const [ImageSvg, setImageSvg] = useState<SVG>(successSvg);
    const [class_, setClass_] = useState<string>();
    const [hidden, setHidden] = useState<boolean>();

    useEffect(()=>{
        let [imag, class_] = getImage(props);
        class_ = (class_ as string);
        setImageSvg((imag as SVG));
        setClass_(class_);
    },[props]);

    useEffect(()=>{
        /* set appdata.assets.tooltips */
    },[]);

    useEffect(() => {
        setHidden((props.hidden) ? props.hidden : false);
    }, []);

    const valUUU = {...defaultD, hide, show};

    console.log("Value is", valUUU);
    window["asss"] = valUUU;

    return (
        <TooltipProvider.Provider value={valUUU}>
            <div
                className="tooltip"
                id="tooltip"
                hidden={hidden}>
                <div className={class_}>
                    <div className="message">
                        {props.message}
                    </div>
                    {
                        /*
                        Custom variable components should be camel case
                        https://stackoverflow.com/a/37414418/8608146
                        */
                    }
                    <ImageSvg
                        style={{maxHeight:"30px"}}/>
                </div>
                <div className="closer">
                    <span onClick={hide}>x</span>
                </div>
            </div>
        </TooltipProvider.Provider>
    );
};

export default Tooltip;
