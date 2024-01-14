import react, {useState} from 'react';

import NavbarDefault from './components/NavbarDefault/NavbarDefault';
import Welcome from './components/welcome/welcome';
import Learnlist from './components/learnlist/learnlist';
import Gallery from './components/gallery/gallery';
import Footer from './components/footer/footer';
import Frequentlyasked from './components/Frequentlyasked/Frequentlyasked';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Location from './components/location/location';
import Information from './components/information/information';
import Contact from './components/contact/contact';
import Fade from "react-reveal";

const App = () => {
  return (
    <Router basename="/familab">
      <Routes>
      
       

        <Route
          path="/build"
          element={[
            <NavbarDefault />,
            <Welcome />,
            <Learnlist />,
            <Fade right><Gallery/></Fade>,
            <Footer />
          ]}
        />
        <Route path="/ubicacion" element={[<NavbarDefault />, <Location />, <Footer />]} />
        <Route path="/sobre-nosotros" element={[<NavbarDefault />, <Information />, <Footer />]} />
        <Route path="/contacto" element={[<NavbarDefault />, <Contact />, <Footer />]} />
        <Route path="/preguntas-frecuentes" element={[<NavbarDefault />, <Frequentlyasked />, <Footer />]} />
      </Routes>
    </Router>


  );
};
export default App;