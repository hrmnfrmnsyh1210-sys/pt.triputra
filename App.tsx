import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Features from './components/Features';
import Footer from './components/Footer';
import GeminiAssistant from './components/GeminiAssistant';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-primary-200 selection:text-primary-900">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Features />
      </main>
      <Footer />
      <GeminiAssistant />
    </div>
  );
}

export default App;