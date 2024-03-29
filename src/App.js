import NavbarDefault from './components/NavbarDefault/NavbarDefault';
import Welcome from './components/welcome/welcome';
import Learnlist from './components/learnlist/learnlist';
import Gallery from './components/gallery/gallery';
import Footer from './components/footer/footer';
import Frequentlyasked from './components/Frequentlyasked/Frequentlyasked';
import { Routes, Route } from "react-router-dom";
import Location from './components/location/location';
import Information from './components/information/information';
import Contact from './components/contact/contact';
import Fade from "react-reveal";
import Video from './components/video/video';

const App = () => {
  return (

      <Routes>
        <Route
          path="/"
          element={[
            <NavbarDefault />,
            <Welcome />,
            <Video/>,
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



  );
};
export default App;