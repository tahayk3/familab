import react, {useState} from 'react';

import NavbarDefault from './components/NavbarDefault/NavbarDefault';
import Welcome from './components/welcome/welcome';
import Learnlist from './components/learnlist/learnlist';
import Gallery from './components/gallery/gallery';
import Footer from './components/footer/footer';
import Frequentlyasked from './components/Frequentlyasked/Frequentlyasked';
import { Routes, Route } from "react-router-dom";
import Location from './components/location/location';

const App = () => {
  return (
    <Routes>
      <Route path="familab/build" element={ [<NavbarDefault/>, <Welcome/>,<Learnlist/>,<Gallery/>, <Footer/> ]  } />
      <Route path="ubicacion" element={ [<NavbarDefault/>, <Location/>, <Footer/>] } />
      <Route path="sobre-nosotros" element={ <Welcome /> } />
      <Route path="contacto" element={ <Learnlist /> } />
      <Route path="preguntas-frecuentes" element={ [<NavbarDefault/>, <Frequentlyasked/>, <Footer/>] } />
    </Routes>

  );
};
export default App;