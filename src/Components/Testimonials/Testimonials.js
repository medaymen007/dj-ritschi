import React, { useState } from "react";
import "./Testimonials.css"
import {testimonialsData} from "./../All Data/TestimonialsDATA";
import left from "../images/left.png";
import right from "../images/right.png"
import {motion} from "framer-motion"

const Testimonials=()=>{
    const [selected,setSelected]=useState(0);
    const tLength=testimonialsData.length
    const transition = {type :'spring ', duration:2}


    return(
        <div className="testimonials">
            <div className="container">
                <div className="partiOne">
                    <div className="title">
                        <p className="first-title">TESTIMONIALS</p>
                        <h2 className="second-title">WHAT THEY</h2>
                        <h2 className="last-title">SAY ABOUT US</h2>
                    </div>
                    <div className="introduction">
                        <p className="review">{testimonialsData[selected].review}</p>
                        <div className="butt-left-right">
                            <div className="image-left">                            
                            <img 
                            onClick={() => {
                                selected === 0
                                ? setSelected(tLength- 1)
                                : setSelected ( (prev)=> prev- 1);
                            }}  
                            src={left} alt="" />
                            </div>
                            <div className="image-right">
                            <img
                            onClick={() => {
                                selected === tLength-1
                                ? setSelected (0)
                                :setSelected ((prev) =>prev + 1);
                                }}
                            src={right} alt="" />
                            </div>
                        </div>
                        <span className="partiTwo"><p className="name">{testimonialsData[selected].name} </p>
                        <p className="status"> -- {testimonialsData[selected].status}</p></span>
                        
                    </div>
                </div>

                <div className="partiTwo">
                    <motion.div 
                    initial={{left:'50px' }} 
                    whileInView={{left:'0px'}}
                    transition={{...transition, type:'tween'}}
                    className="cadre">
                    </motion.div>
                    <motion.div 
                    initial={{left:'0px' }} 
                    whileInView={{left:'30px'}}
                    transition={{...transition, type:'tween'}}
                    className="orangeDiv">
                    </motion.div>
                    <div className="images"><motion.img 
                        initial={ {opacity: 0, x: 100}}
                        animate= {{opacity: 1, x: 0}}
                        exit={{opacity : 0, x: -100}}
                        transition={transition}
                    src={testimonialsData[selected].image} alt="" /></div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials;