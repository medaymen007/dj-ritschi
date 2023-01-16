import React from "react";
import "./information.css"
import ok from "../images/ok.png"
import imageOne from "../images/Screenshot_20230116-180613_Instagram.jpg"
import imageTwo from "../images/FB_IMG_1673888529426.jpg"
import imageThree from "../images/FB_IMG_1673888561801.jpg"
import imageFour from "../images/FB_IMG_1673888581574.jpg"

const Information=()=>{
    return(
        <div className="information">
          <div className="container">
           <div className="imageParti">
            <div className="partiOne">
                <div className="imageOne">
                    <img src={imageOne} alt="" />
                </div>
            </div>
            <div className="partiTwo">
                <div className="imageTwo">
                    <img src={imageTwo} alt="" />
                </div>
                <div className="restImages">
                     <div className="imageThree">
                        <img src={imageThree} alt="" />
                     </div>
                     <div className="imageFour">
                        <img src={imageFour} alt="" />
                     </div>
                </div>
            </div>
           </div>
           <div className="infoParti">
            <p>SOME REASONS</p>
            <h2><span className="stroke-text">WHY</span> CHOOSE US?</h2>
            <div><span><img src={ok} alt="" />over 140+ big party</span></div>
            <div><span><img src={ok} alt="" />Experience of more than 15 years</span></div>
            <div><span><img src={ok} alt="" />Create a fantasy atmosphere </span></div>
            <div><span><img src={ok} alt="" />Received many awards and honors </span></div>

           </div>
          </div>
        </div>
    )
}

export default Information