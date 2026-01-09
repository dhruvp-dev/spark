import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-off-white selection:bg-brand selection:text-white">
      <Navbar />

      <main>
        <Hero />
        <Services />  
        <About />        
        <Contact />
      </main>

      
      <Footer />
    </div>
  );
}

export default App;