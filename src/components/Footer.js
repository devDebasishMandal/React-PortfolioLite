import React from "react";


const Footer=()=>{

const year=new Date().getFullYear();


    return <div className="footer">
         <h2>©Dev.dev{year}</h2>
         <a href="/linkedin">Linkedin</a>
         <a href="/github">Github</a>
    </div>
}



export default Footer;