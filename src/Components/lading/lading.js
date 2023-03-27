import React from "react";
import "./lading.css"
import NumberCounter from "number-counter"
import {motion} from "framer-motion"
const Lading=()=>{
    const transition = {type :'spring ', duration:3}
    return(
        <div className="lading" >
        <div className="container">
            <div className="blur hero-blur"></div>
            <div className="moveTitle">
            <motion.div
                initial={{left:'238px' }} 
                whileInView={{left:'8px'}}
                transition={{...transition, type:'tween'}}>
             </motion.div>
                <p>The Best Dj In The deutschland </p>
            </div>
            
            <div class="title">
                <div><span class="stroke-text">Welcome </span>
                <span>to</span></div>
                <div><span>my profile</span></div>
                <div><span>In this site you can find all my information and you will some of my works and concerts ,
                    welcome again !</span></div>
           </div>
            <div className="statistics">
                <div className="peopleFollow">
                    <span><NumberCounter end={140} start={100} delay="4" preFix="+"/></span>
                    <span>People Follow me </span>
                </div>
                <div className="party">
                    <span><NumberCounter end={440} start={400} delay="4" preFix="+"/></span>
                    <span>Club Night Party</span>
                </div>
                <div className="peopleFollow">
                    <span><NumberCounter end={500} start={400} delay="4" preFix="+"/></span>
                    <span>concerts</span>
                </div>
            </div>
        </div>
      </div>
    )
}

export default Lading;