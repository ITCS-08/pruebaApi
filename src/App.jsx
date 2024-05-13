import react from 'react';
// import react { useState, useEffect } from 'react';
// import MiApi from './components/MiApi';
import LandingPage from './components/LandingPage';
import RefApi from './components/RefApi';
//import Input from './components/Input';
import ComponentFetch from './components/ComponentFetch';


const App = () => {


  return (

    <>
      <div>
        <LandingPage />      
        <ComponentFetch />
      </div>

      {/* <div>
        <RefApi />

      </div> */}


    </>
  );
};

export default App
