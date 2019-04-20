import React from 'react';

import "./Credits.scss";

import { ReactComponent as MusicNoimgSvg } from "./music-noimg.svg";
import { ReactComponent as MusicNoimg2Svg } from "./music-2.svg";
import { ReactComponent as Loading2SVG } from "./loading2.svg";

const Credits = () => {
    return (
        <div className="credit-container">
            <div className="icon-svg-container">
                <MusicNoimgSvg className="icon-svg"/>
                Icons made by <a
                    href="https://www.freepik.com/"
                    title="Freepik">Freepik</a> from <a
                    href="https://www.flaticon.com/"
                    title="Flaticon">www.flaticon.com</a>
                is licensed by <a
                    href="http://creativecommons.org/licenses/by/3.0/"
                    title="Creative Commons BY 3.0"
                    target="_blank">CC 3.0 BY</a>
            </div>
            <div className="icon-svg-container">
                <MusicNoimg2Svg className="icon-svg"/>
                Icons made by <a
                    href="https://www.freepik.com/"
                    title="Freepik">Freepik</a> from <a
                    href="https://www.flaticon.com/"
                    title="Flaticon">www.flaticon.com</a>
                is licensed by <a
                    href="http://creativecommons.org/licenses/by/3.0/"
                    title="Creative Commons BY 3.0"
                    target="_blank">CC 3.0 BY</a>
            </div>
            <div className="icon-svg-container">
                <Loading2SVG className="icon-svg"/>
                Icons made by <a
                    href="https://www.freepik.com/"
                    title="Freepik">Freepik</a> from <a
                    href="https://www.flaticon.com/"
                    title="Flaticon">www.flaticon.com</a>
                is licensed by <a
                    href="http://creativecommons.org/licenses/by/3.0/"
                    title="Creative Commons BY 3.0"
                    target="_blank">CC 3.0 BY</a>
            </div>
        </div>
    )
}

export default Credits;
