import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Portofolio from './components/Portofolio';
import './App.css'

function App() {
  return (
    <div>
      <Header />
      <main>
        <About />
        <Experience />
        <Portofolio />
      </main>
    </div>
  );
};

export default App;