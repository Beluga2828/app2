import { useRef, useState } from "react"

export const RefExam=()=>{
const [stretTime,setStretTime]=useState(null);
const [noww,setNoww]=useState(null);
let ref=useRef(null);

function handleClick(){
    setStretTime(Date.now);
    setNoww(Date.now);
    clearInterval(ref.current);
    ref.current=setInterval(()=>{
        setStretTime(Date.now);
    },1);
}
function handleStop(){
    clearInterval(ref.current); 
}
let secondsPassed=0;
if(stretTime!=null&&noww!=null)
{
secondsPassed=(stretTime-noww)/1000;
}

return(
    <>
    <h1>Time Passed:{secondsPassed.toFixed(2)}</h1>
    <button onClick={handleClick}>Start</button>
    <button onClick={handleStop}>stop</button>
   
    </>
)
}