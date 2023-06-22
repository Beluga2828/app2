import { useState } from "react"

const numbers=[
    'ramesh',
    'suresh',
    'naresh',
    'katesh'
]
export const Exam=()=>{
    const [current,setCurrent]=useState(0);
    return(
     <div style={{width:'100%'}}>
        <div>
            <button onClick={()=>{setCurrent(current===0? numbers.length-1:current-1)}}>previous</button>
        </div>
        {numbers.map((number,indx)=>
        current===indx && (<div key={number}>{number}</div>))}
        <div><button onClick={()=>setCurrent(current===numbers.length-1?0:current+1)}>next</button></div>
     </div>
    )
}