import React from 'react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-neutral-950/70 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-xl tracking-tight font-semibold uppercase">
          Axiom Studio
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#work" className="hover:text-white/80 transition-colors">Work</a>
          <a href="#studio" className="hover:text-white/80 transition-colors">Studio</a>
          <a href="#contact" className="hover:text-white/80 transition-colors">Contact</a>
        </nav>
      </div>
    </header>
  );
}
