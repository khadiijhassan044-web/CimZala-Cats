
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-stone-100 h-20 flex items-center px-6 md:px-12 justify-between">
      <div className="h-16 w-auto flex items-center">
    <img 
        src="/assets/freepik__enhance-image-quality-only-do-not-change-anything-__75800.png" 
        alt="CimZala Catz" 
        className="h-full w-auto object-contain"
    />
</div>
      
      <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest font-light">
        <a href="#about" className="hover:text-stone-400 transition-colors">Om oss</a>
        <a href="#cats" className="hover:text-stone-400 transition-colors">Kattunger</a>
        <a href="#waitlist" className="hover:text-stone-400 transition-colors">Venteliste</a>
        <a href="#contact" className="hover:text-stone-400 transition-colors">Kontakt</a>
      </div>
    </nav>
  );
};

export default Navbar;
