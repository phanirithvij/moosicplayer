/* const playNext = ()=>{
    const aud = getAud();
    const index = props.srclist.indexOf(aud.src);
    console.log(index, props.srclist.length);
    if (index + 1 < props.srclist.length){
        changeSrc(props.srclist[index+1], aud);
        setState({
            audio : {
                ...state.audio,
                src : aud.src
            }
        });
    } else {
        alert("Last song reached");
    }
};

const playPrev = ()=>{
    const aud = getAud();
    const index = props.srclist.indexOf(aud.src);
    if (index - 1 >= 0){
        changeSrc(props.srclist[index-1], aud);
        setState({
            audio : {
                ...state.audio,
                src : aud.src
            }
        });
    } else {
        alert("First song reached");
    }
};
*/

export default {};