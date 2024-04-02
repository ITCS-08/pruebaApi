import React from 'react';
import MiApi from './components/MiApi';

const LandingPage = () => {
  return (
    <div>
      <h1>Bienvenido a mi aplicación</h1>
      <p>Esta es la página de inicio.</p>
    </div>
  );
};

const App = () => {
  return (
    <div>
     <LandingPage /> 
     <MiApi />
    </div>
  );
};

export default App
