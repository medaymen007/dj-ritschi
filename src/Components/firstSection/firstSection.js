import React from "react";
import "./firstSection.css"
import Rightside from "../rightSide/sideComp"
import Leftside from "../leftSide/leftSide"

const Firstsection=()=>{
    return(
        <div className="firstSec" >
           <Leftside/>
           <Rightside/>
        </div>
    )
}

export default Firstsection