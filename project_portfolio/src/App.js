import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Portofolio from './components/Portofolio';
import Blog from './components/Blog';
import Contact from './components/Contact';
import './App.css'

function App() {
  return (
    <div>
      <Header />
      <About />
      <Services />
      <Portofolio />
      <Blog />
      <Contact />
    </div>
  );
};

export default App;