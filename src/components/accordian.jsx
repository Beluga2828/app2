import { useState } from "react";

const images = [
    "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",

];

export const Accordian = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div style={{
            position:'absolute',
            display:'flex',
            alignItems:"center",
            justifyContent:'center',
            width:'100%'
        }}>
            <div>
                <button style={{
                backgroundColor:'black',
                width:'30px',
                padding:'10px',
                borderRadius:'30px'
                }} onClick={() => setActiveIndex(activeIndex === 0 ? images.length - 1 : activeIndex - 1)}> 
                 </button>
            </div>
            {images.map((curent, index) =>
                activeIndex === index && (
                    <div  style={{ minWidth:'50%',height:'60vh'}}key={curent}>
                        <img  style={{ width: '100%',height:'100%',objectFit:'contain' }} src={curent} />
                        </div>))
            }
            <div>
                 <button style={{}} onClick={() => setActiveIndex(activeIndex === images.length - 1 ? 0 : activeIndex + 1)}>

                 </button>
            </div>
            </div>
    );
}

