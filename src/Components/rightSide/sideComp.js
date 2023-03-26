import React from "react";
import "./sideComp.css"
import imageOfMe from "../images/ei_1673857378007-removebg-preview-1.png"
import sideImage from"../images/hero_image_back.9f54bfba33048f4ca688.png"
import {motion} from "framer-motion"

const Rightside=()=>{
   const transition = {type :'spring ', duration:3}

    return(
            <div className="sideBar">
             <motion.div 
             initial={{right:'400px' }} 
             whileInView={{right:'300px'}}
             transition={{...transition, type:'tween'}}
              className="sideImage"> 
                <img src={sideImage} alt="" /> 
             </motion.div>
             <motion.div
              initial={{bottom:'20px'}} 
              whileInView={{bottom:'80px'}}
              transition={{...transition, type:'tween'}}
              className="me" >
                <img src={imageOfMe} alt="" />
             </motion.div>
        </div> 
    )
}

export default Rightside