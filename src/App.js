import React from 'react';
import NavbarDefault from './components/NavbarDefault/NavbarDefault';
import Welcome from './components/welcome/welcome';
import Learnlist from './components/learnlist/learnlist';

const App = () => {
  return (
   <>
    <NavbarDefault></NavbarDefault>
    <Welcome></Welcome>
    <Learnlist></Learnlist>
   </>
  );
};
export default App;