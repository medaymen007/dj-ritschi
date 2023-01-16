import React from "react";
import Slider from "react-slick";
import postal from "../images/20230113_200535.jpg"

import "./caroussel.css"

const Caroussel=()=>{
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return(
<div>
        <Slider {...settings}>
          <div className="postal">
            <img src={postal} alt="" />
          </div>
          <div className="postal">
          <img src={postal} alt="" />
          </div>
          <div className="postal">
          <img src={postal} alt="" />
          </div>
          <div className="postal">
          <img src={postal} alt="" />
          </div>
          <div className="postal">
          <img src={postal} alt="" />
          </div>
          <div className="postal">
          <img src={postal} alt="" />
          </div>
          <div className="postal">
          <img src={postal} alt="" />
          </div>
          <div className="postal">
          <img src={postal} alt="" />
          </div>
        </Slider>
</div>
    )
}

export default Caroussel