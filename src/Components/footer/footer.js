import React from 'react'
import "./footer.css"



 function Footer() {
  return (
    <div className='footer'>
      <hr className='hrSpe' />
      <div className="container">
      <div className="iconZone">
          <a href='https://www.facebook.com/rochdi.aribi.96?mibextid=ZbWKwL'>
             <i class="fa-brands fa-facebook"></i>
          </a>
         <a href="https://www.instagram.com/dj_ritschi/?igshid=YmMyMTA2M2Y%3D&fbclid=IwAR29bTt_7oZTEPa4lvmMds7gJ5kV2x6XEc8b3LpkAQtozr50_Shantdy3PQ">
           <i class="fa-brands fa-instagram"></i>
         </a>
         <a href="mailto:rochdi2409@icloud.com">
          <i class="fa-solid fa-envelope"></i>
         </a>
        </div>
        <div className="djRitschi">
          <h1>DJ Ritschi</h1>
        </div>
      </div>
        
    </div>
  )
}

export default Footer