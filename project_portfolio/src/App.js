import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Portofolio from './components/Portofolio';
import './App.css'

function App() {
  return (
    <div>
      <Header />
      <About />
      <Services />
      <Portofolio />
    </div>
  );
};

export default App;