import React from "react";


const Section=({name,para})=>{
    return(
        <div className="section">
            <h1>{name}</h1>
            <p>{para}</p>
        </div>
    )
}

export default Section;