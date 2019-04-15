import { Data } from "../App";
import axios from "axios";
import { SongsProps, ServerPlaylist } from "./Songs.types";
import { AudioC, Audiodetails } from "../components/Player/Player.types";


class SongsProvider {
    api_url = Data.api.get;
    songs : AudioC;
    constructor(props?:SongsProps){
        // (async ()=>{
        //     let result = await axios(this.api_url);
        //     let data = result.data;
        // })();
        /* get data from server */
        this.songs = this.getSongs({
            data: [
                {
                    title       : "Shooting Star by Homemade Kaizoku",
                    src         : "http://10.1.131.122:8096/emby/Audio/820/universal?UserId=bc7ba719d6c244e2a90abbf5360ae4ef&DeviceId=TW96aWxsYS81LjAgKFgxMTsgTGludXggeDg2XzY0KSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWUvNzMuMC4zNjgzLjg2IFNhZmFyaS81MzcuMzZ8MTU1NTM2MDE5MDQ4Mg11&MaxStreamingBitrate=140000000&Container=opus%2Cmp3%7Cmp3%2Caac%7Caac%2Cm4a%7Caac%2Cmp4%7Caac%2Cflac%2Cwebma%2Cwebm%2Cwav%2Cogg&TranscodingContainer=aac&TranscodingProtocol=hls&AudioCodec=aac&api_key=7a2dd84ea9924659945792fac1d24788&PlaySessionId=1555360194351&StartTimeTicks=0&EnableRedirection=true&EnableRemoteMedia=true"
                },
                {
                    title       : "Achhi Muite by Swimy",
                    src         :`https://res.cloudinary.com/rootworld/video/upload/v1530081026/soundcloud_acchi_muite_rally_jaxx.mp3`,
                },
                {
                    title       : "Obeying Thermodynamics by Homer Simpsons",
                    src         : "https://res.cloudinary.com/rootworld/video/upload/v1544685814/sample.wav",
                    playcount   : 100,
                },
                {
                    title       : "Just Awake by Fear,Loathing in LasVegas",
                    src         : "https://res.cloudinary.com/rootworld/video/upload/v1522342267/01_-_Just_Awake.mp3",
                }
            ],
        });
    };

    get playlist() : AudioC {
        return this.songs;
    };

    set playlist(data : AudioC) {
        /* data */
        
    };

    private getSongs(data : ServerPlaylist) {
        /* got data from server */
        const audios    : AudioC[] = data.data.map(song=>new AudioC(song));
        let ret         : AudioC = audios[0];
        let curr        : AudioC = ret;
        var prev        : AudioC;                   /* initially undefined */
        // audios.splice(0, 1);                        /* remove first one */

        audios.forEach((_, i) => {
            curr.prev = prev;                       /* current's previous is prev */
            curr.next = audios[i+1];                /* current's next is the next song i.e. song*/
            prev = curr;                            /* previous is set */
            curr = curr.next;                       /* curr changes to the next song */
        });
        
        /* last one is special if splice is done */
        // if (audios.length > 2){
        //     curr.prev = audios[audios.length-2];
        // }
        // if (audios.length == 2){
        //     curr.prev = ret;
        // }
        window["ret"] = ret;
        return ret;
    };

};


export default SongsProvider;