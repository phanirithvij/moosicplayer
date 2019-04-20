import React, { useContext, useState, useEffect } from 'react';

import "./Details.scss";

import { DetailsProps } from './Details.types';
import { PlayerContext } from '../Player/Player';
import { Link } from 'react-router-dom';

import { ReactComponent as HeartSvg } from "../../assets/heart.svg";
import { ReactComponent as MusicNoimgSvg } from "../../assets/music-noimg.svg";
import { ReactComponent as MusicNo2imgSvg } from "../../assets/music-2.svg";
import { ReactComponent as LoadingSVG } from "../../assets/loading.svg";
import { ReactComponent as Loading2SVG } from "../../assets/loading2.svg";

import { SVG } from '../../assets/Images.types';
import { uuidv4 } from '../../utils/UUID';
import { AudioCC } from '../Player/Player.types';
export type imgg = React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;

/* https://github.com/Microsoft/TypeScript/issues/15449#issuecomment-298104181 */
declare global {
    namespace JSX {
        interface IntrinsicElements {
            imgS: SVG | imgg;
        }
    }
};

const Details = (props:DetailsProps) => {

    let audio : AudioCC;
    if (props){
        audio = props.audio;
    } else {
        /* no props => player */
        const playerData = useContext(PlayerContext);
        audio = playerData.audio;
    }

    const [loading, setLoading] = useState(true);
    const [uuid, setUuid] = useState<string>("");
    useEffect(()=>{
        setUuid(uuidv4())
    }, []);
    // const [Imgthw, setImg] = useState<SVG | imgg>(LoadingSVG);

    const loadImg = ()=>{
        if (audio.thumb) {
            const img = new Image();
            console.log("started loading", audio.thumb);
            img.src = audio.thumb;
            img.classList.add("a-thumb-small");
            img.onload = (_e : Event)=>{
                // setImg(img);
                console.log("ended loading");
                const cont = document.querySelector(`a-thumb-${uuid}`);
                if(cont){
                    cont.innerHTML = "";
                    cont.appendChild(img);
                }
                setLoading(false);
            };
        } else {
            console.log("no image here => placeholder will be used");
        }
    };

    useEffect(()=>{
        loadImg();
    }, [audio.thumb, audio]);

    return (
        <div className="details">
            {
                <div className="a-thumb" id={`a-thumb-${uuid}`}>
                    {
                        (loading) ?
                        <Loading2SVG className="svg-loading img-svg"/> :
                        (()=>{
                            return (audio && audio.thumb) ?
                                <></> :
                                <MusicNo2imgSvg className="img-svg"/>
                        })()
                    }
                </div>
            }
            {
                <div className="a-title">
                    {audio && audio.title ? <Link to={`/s/${audio.id}`}>{audio.title}</Link> : ''}
                </div>
            }
            {
                // <div className="ilu">I <HeartSvg className="heart" /> U</div>
            }
            {/* {
                <div className="a-playc">
                    Playcount : {audio && audio.playcount}
                </div>
            } */}
        </div>

    );
};

export default Details;
