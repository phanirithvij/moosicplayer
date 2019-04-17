import React, { useEffect, useContext } from 'react';
import Axios from 'axios';
import { Data, AppProvider } from '../../App';

export interface EmojiProps {
    unicode     : string;
    image       : string;
};

const Emoji = (props:EmojiProps) => {

    const getEmojiUrls = async (unicode?: string) => {
        let url = Data.api.get + "/emojis";
        if (unicode){
            url = `${Data.api.get}/emojis/${escape(unicode)}`;
        }
        const { data } = await Axios.get<string>(url);
        return data;
    };
    const appData = useContext(AppProvider);

    useEffect(()=>{
        (async ()=>{
            const dat = await getEmojiUrls();
            appData.emojis = dat;
        })();
    }, []);

    return (
        <span className="emoji">
            <img src={props.image} alt={props.unicode}/>
        </span>
    );
};

export default Emoji;
