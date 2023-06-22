import { useEffect } from "react";


function createConnection(){
    return{
        connect(){
            console.log('✅connected...')
        },
         disconnect(){
            console.log('❌disconnected...')
        }
    }
}
export const Connection=()=>{

  useEffect(()=>{
    const connection=createConnection();
    connection.connect();
    return   ()=>connection.disconnect();
  },[]
  );
    return(
    <>
    <h1>welcome to chat</h1>
    </>
    )
}