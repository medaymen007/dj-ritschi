import React from "react";
import "./service.css"

import okOne from "../images/ok1.png"

const Service=()=>{
    return(
        <div className="service" id="Plans">
          <div className="container">
            <div className="blur hero-blur" ></div>
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
                  <a href="tel:+49 177 4650913" >CALL ME</a>
                  <a href="mailto:rochdi2409@icloud.com">SEND ME E-MAIL</a>
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
                  <a href="tel:+49 177 4650913" >CALL ME</a>
                  <a href="mailto:rochdi2409@icloud.com">SEND ME E-MAIL</a>
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
                  <a href="tel:+49 177 4650913" >CALL ME</a>
                  <a href="mailto:rochdi2409@icloud.com">SEND ME E-MAIL</a>
                </div>
            </div>
          </div>
        </div>
    )
}

export default Service