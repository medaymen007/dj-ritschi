import React from "react";
import "./nevbar.css"
import Bars from "../images/button.png"
import { useState } from "react";
import  { Link } from "react-scroll" 

const NevBar =()=>{
  const mobile = window.innerWidth <= 768 ? true: false;
  const [menuOpened,setHenuopened]=useState(false);   
   return(
        <div className="nevbar">
         <div className="container">
         <div className="logo">
            DJ Ritschi 
          </div>
         {menuOpened === false && mobile === true ? (
          <div 
          style={{
            backgroundColor : "#3c3f45",
            padding: "0.5rem",
            borderRadius: "5px",
            position: "fixed",
            zIndex: "100",
            right: "27px"

        }}
        onClick={()=> setHenuopened(true)}
          >
            <img src={Bars} alt="" style={{width:'1.5rem',height:'1.5rem'}}/>
          </div>  
         ):(    
          <div className="links">
          <Link 
          onClick={() =>setHenuopened (false)}
          to ="Home"
          span={true}
          Smooth={true}
          href="">Home</Link>
          <Link 
          onClick={() =>setHenuopened (false)}
          to ="Programs"
          span={true}
          Smooth={true}
          href="">Programs</Link>
          <Link 
          onClick={() =>setHenuopened (false)}
          to ="Why Us"
          span={true}
          Smooth={true}
          href="">Why Us</Link>
          <Link 
          onClick={() =>setHenuopened (false)}
          to ="Plans"
          span={true}
          Smooth={true}
          href="">Plans</Link>
          <Link 
          onClick={() =>setHenuopened (false)}
          to ="testimonials"
          span={true}
          Smooth={true}
          href="">Testimonials</Link>
        </div>
  )}
         </div>
        </div>
    )
}

export default NevBar
