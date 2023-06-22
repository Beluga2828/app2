import { forwardRef, useRef } from "react";

const MyInput=forwardRef((props,ref)=>{
return <input {...props} ref={ref}/>
})

export const Reefexample=()=>{
    const myref=useRef(null);
    const myreef=useRef(null);
    function handleButton(){
 // myref.current.focus();
  myreef.current.focus();
}
    return(
        //    <><input ref={myref} />
        <>  <MyInput ref={myreef} />
          <button onClick={handleButton}>clickit</button></> 
    )
}