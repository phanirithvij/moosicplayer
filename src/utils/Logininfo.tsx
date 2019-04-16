import { useCookies } from 'react-cookie';

const loginInfo = () => {
    /* get cookie */
    const [kookie, setKookie, removeKookie] = useCookies(['name']);
    console.log("Kookies retrieval",kookie);
    let kook = {kookie, setKookie, removeKookie};
    window.kookie = kook;
    return kook;
};

export default loginInfo;
