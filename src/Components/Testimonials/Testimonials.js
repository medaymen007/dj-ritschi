import React from "react";
import "./Testimonials.css"

const Testimonials=()=>{
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
                        <p></p>
                        <span><p className="name"></p> <p>-</p></span>
                    </div>
                </div>

                <div className="partiTwo">
                    <div className="cadre"></div>
                    <div className="orangeDiv"></div>
                    <div className="images"><img src="" alt="" /></div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials;