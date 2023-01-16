import React from "react";
import "./sideComp.css"
import imageOfMe from "../images/ei_1673857378007-removebg-preview-1.png"
import sideImage from"../images/hero_image_back.9f54bfba33048f4ca688.png"
const Rightside=()=>{
    return(
            <div className="sideBar">
             <div className="sideImage"> 
                <img src={sideImage} alt="" /> 
             </div>
             <div className="me" >
                <img src={imageOfMe} alt="" />
             </div>
        </div> 
    )
}

export default Rightside