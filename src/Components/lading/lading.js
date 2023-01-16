import React from "react";
import "./lading.css"


const Lading=()=>{
    return(
        <div className="lading" >
        <div className="container">
            <div className="moveTitle">
                <span></span>
                <p>The Best Dj In The deutschland</p>
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
                    <span>+ 140</span>
                    <span>People Follow me </span>
                </div>
                <div className="party">
                    <span>+ 440</span>
                    <span>Club Night Party</span>
                </div>
                <div className="peopleFollow">
                    <span>+ 500</span>
                    <span>concerts</span>
                </div>
            </div>
        </div>
      </div>
    )
}

export default Lading;