import react, {useState} from 'react';
import NavbarDefault from './components/NavbarDefault/NavbarDefault';
import Welcome from './components/welcome/welcome';
import Learnlist from './components/learnlist/learnlist';
import Gallery from './components/gallery/gallery';
import Footer from './components/footer/footer';
import Frequentlyasked from './components/Frequentlyasked/Frequentlyasked';


const App = () => {
  const [currentComponents, setCurrentComponents] = useState(['NavbarDefault', 'Welcome']);

  const handleNavbarClick = (componentsToShow) => {
    setCurrentComponents(componentsToShow);
  };
  return (
   <>
    <NavbarDefault></NavbarDefault>
    <Welcome></Welcome>
    <Learnlist></Learnlist>
    <Gallery></Gallery>
    <Footer></Footer>
    <Frequentlyasked></Frequentlyasked>
   </>
  );
};
export default App;