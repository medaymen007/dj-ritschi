import React, { useState } from "react";
import "./Testimonials.css"
import {testimonialsData} from "./../All Data/TestimonialsDATA";
import left from "../images/left.png";
import right from "../images/right.png"


const Testimonials=()=>{
    const [select,setselect]=useState(0);
    const tLength=testimonialsData.length

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
                        <p className="review">{testimonialsData[select].review}</p>
                        <div className="butt-left-right">
                            <div className="image-left">                            
                            <img src={left} alt="" />
                            </div>
                            <div className="image-right">
                            <img src={right} alt="" />
                            </div>
                        </div>
                        <span className="partiTwo"><p className="name">{testimonialsData[select].name} </p>
                        <p className="status"> -- {testimonialsData[select].status}</p></span>
                        
                    </div>
                </div>

                <div className="partiTwo">
                    <div className="cadre"></div>
                    <div className="orangeDiv"></div>
                    <div className="images"><img src={testimonialsData[select].image} alt="" /></div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials;