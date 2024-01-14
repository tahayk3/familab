import react, {useState} from 'react';

import NavbarDefault from './components/NavbarDefault/NavbarDefault';
import Welcome from './components/welcome/welcome';
import Learnlist from './components/learnlist/learnlist';
import Gallery from './components/gallery/gallery';
import Footer from './components/footer/footer';
import Frequentlyasked from './components/Frequentlyasked/Frequentlyasked';
import { Routes, Route, Router } from "react-router-dom";
import Location from './components/location/location';
import Information from './components/information/information';
import Contact from './components/contact/contact';

import Fade from "react-reveal";

const App = () => {
  return (
    <Routes >
      <Route basename="/familab/build" path="/familab/build/" element={ [<NavbarDefault/>, <Welcome/>,<Learnlist/>,<Fade right><Gallery/></Fade>, <Footer/> ]  } />
      <Route basename="/familab/build" path="/ubicacion" element={ [<NavbarDefault/>, <Location/>, <Footer/>] } />
      <Route basename="/familab/build" path="/sobre-nosotros" element={ <Welcome /> } />
      <Route path="/familab/build/contacto" element={ <Learnlist /> } />
     
    </Routes>

  );
};
export default App;