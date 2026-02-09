
import React, { useState } from 'react';
import { CATS_DATA } from '../constants';
import { Cat } from '../types';

const CatModal: React.FC<{ cat: Cat; onClose: () => void }> = ({ cat, onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300">
        <div className="relative h-64 sm:h-96">
          <img src={cat.imageUrl} alt={cat.name} className="w-full h-full object-cover" />
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 transition-colors"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <div className="p-8 space-y-6">
          <div className="flex justify-between items-end">
            <div>
              <h3 className="text-4xl serif-font mb-1">{cat.name}</h3>
              <p className="text-stone-400 uppercase tracking-widest text-sm">{cat.age}</p>
            </div>
          </div>
          <p className="text-stone-600 text-lg leading-relaxed">{cat.description}</p>
          <button 
            className="w-full py-4 bg-stone-800 text-white rounded-xl text-lg font-medium hover:bg-stone-900 transition-all uppercase tracking-widest"
            onClick={() => alert(`Søknad for ${cat.name} er mottatt!`)}
          >
            SØK OM Å ADOPTERE {cat.name.toUpperCase()}
          </button>
        </div>
      </div>
    </div>
  );
};

const CatCard: React.FC<{ cat: Cat; onOpen: (cat: Cat) => void }> = ({ cat, onOpen }) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-stone-100">
      <div className="relative h-72 overflow-hidden">
        <img 
          src={cat.imageUrl} 
          alt={cat.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
            <span className="text-white text-sm uppercase tracking-widest">Klar for adopsjon</span>
        </div>
      </div>
      <div className="p-6 text-center space-y-4">
        <h3 className="text-2xl serif-font">{cat.name}</h3>
        <button 
          onClick={() => onOpen(cat)}
          className="px-8 py-2 border border-stone-200 rounded-full text-stone-600 text-sm uppercase tracking-widest hover:bg-stone-50 transition-colors"
        >
          Les mer
        </button>
      </div>
    </div>
  );
};

const CatGrid: React.FC = () => {
  const [selectedCat, setSelectedCat] = useState<Cat | null>(null);

  return (
    <section id="cats" className="py-24 px-6 md:px-12 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl serif-font">Våre Kattunger</h2>
          <p className="text-stone-500 uppercase tracking-[0.3em] text-sm">Finn din nye bestevenn</p>
          <div className="h-1 w-12 bg-stone-300 mx-auto mt-6" />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {CATS_DATA.map(cat => (
            <CatCard key={cat.id} cat={cat} onOpen={setSelectedCat} />
          ))}
        </div>
      </div>

      {selectedCat && (
        <CatModal cat={selectedCat} onClose={() => setSelectedCat(null)} />
      )}
    </section>
  );
};

export default CatGrid;
