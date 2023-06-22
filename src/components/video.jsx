import { useCallback, useEffect, useRef, useState } from "react";


const Videoplayer=({src,isplaying})=>{
let ref=useRef(null);
useEffect(()=>{
    if(isplaying){
        console.log('calling video play');
        ref.current.play();
    }else{
        console.log('calling video pause');
        ref.current.pause();
    }
},[isplaying])
return <video ref={ref} src={src} loop playsInline/>
}

export const Myvideo=()=>{
    const [isplaying,setIsPlaying]=useState(false);
    const [text,setText]=useState('type');
    return(
        <>
        <input onChange={(e)=>setText(e.target.value)} value={text} />
        <button onClick={()=>setIsPlaying(!isplaying)}>
         {isplaying? 'pause': 'play'}
        </button>
     <Videoplayer src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" isplaying={isplaying} />
     </>
    )
}