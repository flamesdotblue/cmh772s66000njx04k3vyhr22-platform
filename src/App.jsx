import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-[Inter]">
      <Header />
      <main>
        <Hero />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}
