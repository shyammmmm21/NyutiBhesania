import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Experience from './components/Experience';
import Education from './components/Education';
import Accolades from './components/Accolades';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-offwhite min-h-screen text-dark relative">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Publications />
        <Experience />
        <Education />
        <Accolades />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
