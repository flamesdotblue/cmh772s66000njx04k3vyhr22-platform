import React from 'react';

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-neutral-400">
        <p>© {new Date().getFullYear()} Axiom Studio. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-neutral-200">Instagram</a>
          <a href="#" className="hover:text-neutral-200">LinkedIn</a>
          <a href="#" className="hover:text-neutral-200">Behance</a>
        </div>
      </div>
    </footer>
  );
}
