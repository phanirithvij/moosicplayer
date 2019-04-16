import { Data } from "../App";
import axios from "axios";
import { SongsProps, ServerPlaylist } from "./Songs.types";
import { AudioC } from "../components/Player/Player.types";


class SongsProvider {
    api_url = Data.api.get;
    constructor(props:SongsProps){
        // (async ()=>{
        //     let result = await axios(this.api_url);
        //     result = result.data;
        // })();
    };

    get playlist() : AudioC {
        const src_ = new AudioC({
            title : "Achhi Muite by Swimy",
            src   :`https://res.cloudinary.com/rootworld/video/upload/v1530081026/\
                    soundcloud_acchi_muite_rally_jaxx.mp3`,
        });
        const next1 = new AudioC({
            prev  : src_,
            title : "Obeying Thermodynamics by Homer Simpsons",
            src   : "https://res.cloudinary.com/rootworld/video/upload/v1544685814/sample.wav",
        });
        const next2 = new AudioC({
            prev  : next1,
            title : "Just Awake by Fear,Loathing in LasVegas",
            src   : "https://res.cloudinary.com/rootworld/video/upload/v1522342267/01_-_Just_Awake.mp3",
        });
        /*
        ...
        next2.next = next3;
        */
        next1.next = next2;
        src_.next = next1;
        return src_;
    };

    private getPlaylist(data : ServerPlaylist) {
        /* got data from server */
        data.data.forEach(song => {
            console.log(song);
        });
    };

};


export default SongsProvider;