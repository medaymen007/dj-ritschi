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



function App() {
  return (
    <div className="App">
     <Firstsection/>
     <Programmes/>
     <Information/>
     <Service/>
    </div>
  );
}

export default App;
