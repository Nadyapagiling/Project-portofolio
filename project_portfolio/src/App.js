import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import './App.css'

function App() {
  return (
    <div>
      <Header />
      <main>
        <About />
        <Experience />
        <Portfolio />
      </main>
    </div>
  );
};

export default App;