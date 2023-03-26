import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import './App.css';
import "./css/mainProSite.css"
import "./css/nrml_lize.css"
import Firstsection from './Components/firstSection/firstSection';
import Programmes from './Components/programmes/programmes';
import Information from './Components/about me/information';
import Service from './Components/service/service';
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from './Components/contact/contat';
import Footer from './Components/footer/footer';



function App() {
  return (
    <div className="App">
     <Firstsection/>
     <Programmes/>
     <Information/>
     <Service/>
     <Testimonials/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
