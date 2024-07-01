import React, { useState } from "react";

const Main = () =>{
    const [imgUrl,setUrl] = useState(" ");
    const callImg = () =>{
        fetch("https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1")
        .then(res=>res.json())
        .then(data=>setUrl(data[0].url))
    }
    return(
        <>
        <div className="container">
<div className="box">
    <h2>Enjoye The Kitty</h2> <br></br>
    <img src={imgUrl}/> <br></br>
    <button onClick={()=>callImg()}>Click Me</button>
</div>
        </div>
        </>
    )
}
export default Main;