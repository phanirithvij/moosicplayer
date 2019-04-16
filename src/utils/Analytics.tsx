import axios from "axios";
import { Data } from "../App";

import { AnalyticsConfig } from "./Analytics.types";

class Analytics {
    state : Object = {};
    constructor(props?:AnalyticsConfig){
        (props) ? console.log("Recieved Props", props) : props = {enabled:false};
        (props.enabled) ? this.init() : console.log("Analytics disabled");
    }

    init(){
        console.info("Analytics started");
        console.info("Establishing connection....");
        (async ()=>{
            const result = await axios(Data.api.status);
            // console.log(result.data);
        })();
    }
};

export default Analytics;
