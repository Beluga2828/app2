import { useRef, useState } from "react"

export  const Example=()=>{
const [startTime,setStartTime]=useState(null);
const [now,setNow]=useState(null);
const intervalRef=useRef(null);

function handleClick(){
    let element=document.getElementById('barr');
    let width=0;
    let intervalclear=setInterval(frame,10);
    //clearInterval(startTime);
    setStartTime(intervalclear);
 function frame(){   
    width++;
   element.style.width=width + '%';
} 
}
function handleStop(){
    clearInterval(startTime);
    }

return(
    <>
   <div> <h1>Time Passed:</h1>
    <div id='bar'>
         <div id='barr'></div>
    </div></div>
    <div><button onClick={handleClick} >start</button>
    <button onClick={()=>handleStop()}>stop</button></div>
    </>
)
}