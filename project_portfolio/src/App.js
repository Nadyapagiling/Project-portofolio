import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css'; // Main CSS file for global styles

function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <About />
                <Portfolio />
 <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;