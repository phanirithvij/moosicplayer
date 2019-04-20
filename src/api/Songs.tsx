import { Data } from "../App";
import axios from "axios";
import { SongsRequestFilters, ServerPlaylist } from "./Songs.types";
import { AudioCC } from "../components/Player/Player.types";

class SongsProvider {
    api_url = Data.api.get + "/songs";
    private songs : AudioCC;
    public rawList : ServerPlaylist;
    constructor(props:SongsRequestFilters){
        /* (async ()=>{
            const { data } = await axios(`${this.api_url}/${props.}`);
        })(); */
        /* get data from server */
        /* pass data to this method */
        /* props not empty => do request else just using for utils */
        if (Object.keys(props).length){
            this.rawList = {
                data: [
                    {
                        id          : "hmkz-ss",
                        title       : "Shooting Star",
                        src         : "http://localhost:8096/emby/Audio/886/universal?UserId=28591569ceab4f3eacb2c542883b4b15&DeviceId=TW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzczLjAuMzY4My44NiBTYWZhcmkvNTM3LjM2fDE1NTM5NjU3ODA1NzQ1&MaxStreamingBitrate=140000000&Container=opus%2Cmp3%7Cmp3%2Caac%7Caac%2Cm4a%7Caac%2Cmp4%7Caac%2Cflac%2Cwebma%2Cwebm%2Cwav%2Cogg&TranscodingContainer=aac&TranscodingProtocol=hls&AudioCCodec=aac&api_key=0e5d4d05e4864073be0e702713e18586&PlaySessionId=1555766496954&StartTimeTicks=0&EnableRedirection=true&EnableRemoteMedia=true",
                        playcount   : 90,
                        start       : 19,
                        singers     : [{
                            name    : "Homemade Kaizoku",
                            id      : "hmkz",
                        }],
                        thumb       : "http://localhost:8096/emby/Items/886/Images/Primary?maxWidth=480&tag=90d4985e3754d9c8c1943f2b1b1d9791&quality=90"
                    },
                    {
                        id          : "sw-am",
                        title       : "Achhi Muite",
                        singers     : [{
                            name    : "Swimy",
                            id      : "sw",
                        }],
                        src         :`https://res.cloudinary.com/rootworld/video/upload/v1530081026/soundcloud_acchi_muite_rally_jaxx.mp3`,
                    },
                    {
                        id          : "homs-olt",
                        title       : "Obeying Thermodynamics",
                        singers     : [{name:"Homer Simpsons", id:"homs",}],
                        src         : "https://res.cloudinary.com/rootworld/video/upload/v1544685814/sample.wav",
                        playcount   : 100,
                    },
                    {
                        id          : "flla-ja",
                        title       : "Just Awake",
                        src         : "https://res.cloudinary.com/rootworld/video/upload/v1522342267/01_-_Just_Awake.mp3",
                        playcount   : 91,
                        singers     : [{
                            id      : "flla",
                            name    : "Fear,Loathing in LasVegas",
                        }],
                    },
                    {
                        id          : "es-tol",
                        src         : "http://localhost:8096/emby/Audio/876/universal?UserId=28591569ceab4f3eacb2c542883b4b15&DeviceId=TW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzczLjAuMzY4My44NiBTYWZhcmkvNTM3LjM2fDE1NTM5NjU3ODA1NzQ1&MaxStreamingBitrate=140000000&Container=opus%2Cmp3%7Cmp3%2Caac%7Caac%2Cm4a%7Caac%2Cmp4%7Caac%2Cflac%2Cwebma%2Cwebm%2Cwav%2Cogg&TranscodingContainer=aac&TranscodingProtocol=hls&AudioCCodec=aac&api_key=0e5d4d05e4864073be0e702713e18586&PlaySessionId=1555766496953&StartTimeTicks=0&EnableRedirection=true&EnableRemoteMedia=false",
                        thumb       : "http://localhost:8096/emby/Items/876/Images/Primary?maxWidth=375&tag=8d159cf24fc4363aa1c2a621d9caa161&quality=90",
                        playcount   : 10,
                        title       : "Thinking out loud",
                        singers     : [{
                            id      : "es",
                            name    : "Ed sheeran",
                        }],
                    }
                ],
            };
        } else {
            if (props.rawList) {
                this.rawList = props.rawList;
            } else {
                this.rawList = {data:[]};
            }
        }
        this.songs = this.converttoAudioCC(this.rawList);
    };

    get playlist() : AudioCC {
        return this.songs;
    };

    set playlist(data : AudioCC) {
        /* data */
        
    };

    public converttoAudioCC(data : ServerPlaylist, circular=false) {
        /* got data from server */
        const audios    : AudioCC[] = data.data.map(song=>new AudioCC(song));
        let ret         : AudioCC = audios[0];
        let curr        : AudioCC = ret;
        var prev        : AudioCC;                   /* initially undefined */
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
        if (circular){
            // ret.
        }
        window["ret"] = ret;
        return ret;
    };

};


export default SongsProvider;