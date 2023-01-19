import React from "react";
import "./service.css"

import okOne from "../images/ok1.png"

const Service=()=>{
    return(
        <div className="service">
          <div className="container">
            <div className="title">
                <h2> <div className="stroke-text"> READY TO START </div>  YOUR JOURNEY <div className="stroke-text" >NOW WITH US</div> </h2>
            </div>
            <div className="cartes">
                <div className="basic carte">
                  <h4>BASIC PLAN</h4>
                  <h4>$ 25</h4>
                  <div className="features">
                  <div className="feature"> <img src={okOne} alt="" /> <p>2 hours of excercises</p> </div>
                  <div className="feature"> <img src={okOne} alt="" /> <p>!!!!!!!!!!!!!!!!!!!!!</p> </div>
                  <div className="feature"> <img src={okOne} alt="" /> <p>!!!!!!!!!!!!!!!!!!!!!</p> </div>
                  </div>
                  <p>call me for more information</p>
                  <button>CALL ME</button>
                  <button>SEND ME E-MAIL</button>
                </div>
                <div className="premium carte">
                <h4>PREMIUM PLAN</h4>
                  <h4>$ 45</h4>
                  <div className="features">
                  <div className="feature"> <img src={okOne} alt="" /> <p>2 hours of excercises</p> </div>
                  <div className="feature"> <img src={okOne} alt="" /> <p>!!!!!!!!!!!!!!!!!!!!!</p> </div>
                  <div className="feature"> <img src={okOne} alt="" /> <p>!!!!!!!!!!!!!!!!!!!!!</p> </div>
                  </div>
                  <p>call me for more information</p>
                  <button>CALL ME</button>
                  <button>SEND ME E-MAIL</button>
                </div>
                <div className="pro carte">
                <h4>PRO PLAN</h4>
                  <h4>$ 30</h4>
                  <div className="features">
                  <div className="feature"> <img src={okOne} alt="" /> <p>2 hours of excercises</p> </div>
                  <div className="feature"> <img src={okOne} alt="" /> <p>!!!!!!!!!!!!!!!!!!!!!</p> </div>
                  <div className="feature"> <img src={okOne} alt="" /> <p>!!!!!!!!!!!!!!!!!!!!!</p> </div>
                  </div>
                  <p>call me for more information</p>
                  <button>CALL ME</button>
                  <button>SEND ME E-MAIL</button>
                </div>
            </div>
          </div>
        </div>
    )
}

export default Service