import axios from "axios";

// import

class Analytics {
    state : Object = {};
    constructor(props?:Object){
        (props) ? console.log("Recieved Props", props) : null;
        console.info("Analytics started");
        console.info("Establishing connection....");
        async ()=>{
            const result = await axios("");
        }
    }

};

export default Analytics;