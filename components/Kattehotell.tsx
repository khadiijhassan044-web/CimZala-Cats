import React from 'react';

const Kattehotell: React.FC = () => {
  return (
    <section id="kattehotell" className="py-24 px-6 md:px-12 bg-[#FAF9F6]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="w-full md:w-1/2 space-y-8">
          <h2 className="text-4xl md:text-5xl text-stone-800 leading-tight">
            Kattehotell
          </h2>
          <div className="h-1 w-20 bg-stone-200" />
          <p className="text-lg text-stone-600 leading-relaxed font-light">
            Denne seksjonen er klar for innhold. Vi legger til tekst, bilder og
            funksjoner senere.
          </p>
        </div>
        <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-2xl bg-white h-[400px] flex items-center justify-center">
          <span className="text-stone-400 uppercase tracking-widest text-sm">
            Coming soon
          </span>
        </div>
      </div>
    </section>
  );
};

export default Kattehotell;
