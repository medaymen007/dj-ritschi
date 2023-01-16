import React from "react";
import Caroussel from "../caroussel/caroussel";

import "./programmes.css"

const Programmes=()=>{
  
    return(
          <div className="Programmes" >
            <div className="container">
            <div className="title">
                <div><span className="stroke-text">EXPLORE OUR</span></div>
                <div><span>PROGRAMS</span></div>
                <div><span className="stroke-text">TO SHAPE YOU</span></div>
            </div>
            </div>
            
            <Caroussel/>

         </div>
        )
}

export default Programmes