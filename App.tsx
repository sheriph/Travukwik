import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Destinations } from './components/Destinations';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Destinations />
      </main>
      <Contact />
    </div>
  );
}

export default App;