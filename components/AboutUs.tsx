
import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-2xl">
          <img 
            src="/assets/cat3.jpg" 
            alt="CimZala Cats Miljø" 
            className="w-full h-[500px] object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 space-y-8">
          <h2 className="text-4xl md:text-5xl text-stone-800 leading-tight">Om CimZala Cats</h2>
          <div className="h-1 w-20 bg-stone-200" />
          <p className="text-lg text-stone-600 leading-relaxed font-light">
            Velkommen til CimZala Cats. Vi er lidenskapelig opptatt av katters velferd og jobber hver dag for å koble fantastiske katter med sine evige hjem. Vår filosofi er enkel: hver katt fortjener et trygt, kjærlig og varig hjem.
          </p>
          <p className="text-lg text-stone-600 leading-relaxed font-light">
            Siden oppstarten har vi hjulpet hundrevis av katter med å finne sin perfekte match. Vi sørger for at alle våre katter er helsesjekket, vaksinert og sosialiserte før de flytter til sine nye familier. Vi brenner for å skape bånd som varer livet ut.
          </p>
          <div className="pt-4 flex gap-6">
             <div className="text-center">
                <span className="block text-3xl font-bold serif-font">500+</span>
                <span className="text-xs uppercase tracking-widest text-stone-400">Adopterte</span>
             </div>
             <div className="text-center border-l border-stone-100 pl-6">
                <span className="block text-3xl font-bold serif-font">10+</span>
                <span className="text-xs uppercase tracking-widest text-stone-400">Års Erfaring</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
