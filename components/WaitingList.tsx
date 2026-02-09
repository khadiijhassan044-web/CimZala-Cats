
import React from 'react';

const WaitingList: React.FC = () => {
  return (
    <section id="waitlist" className="py-24 px-6 md:px-12 bg-[#FFF9F2] relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 p-12 opacity-10 rotate-12">
        <svg width="200" height="200" viewBox="0 0 100 100" fill="currentColor" className="text-orange-900">
             <path d="M20 50 C20 30 50 10 50 10 C50 10 80 30 80 50 C80 70 50 90 50 90 C50 90 20 70 20 50" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-12">
        <div className="space-y-4">
          <h2 className="text-6xl text-[#D97706] italic font-serif" style={{ fontFamily: 'Playfair Display, serif' }}>Venteliste</h2>
          <p className="text-stone-600 text-lg max-w-2xl mx-auto">
            Meld deg på ventelisten og fortell oss hva slags katt du ønsker. Vi tar kontakt når en passende venn blir ledig.
          </p>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-xl border-8 border-[#FDF2F2] relative">
          {/* Cartoon Cat illustrations (mocked by divs for layout) */}
          <div className="hidden lg:block absolute -left-20 top-20 w-40 h-40">
             <img src="https://picsum.photos/id/40/200/200" alt="Cute illustration" className="rounded-full border-4 border-white shadow-lg" />
          </div>
          <div className="hidden lg:block absolute -right-20 top-40 w-40 h-40">
             <img src="https://picsum.photos/id/65/200/200" alt="Cute illustration" className="rounded-full border-4 border-white shadow-lg" />
          </div>

          <form className="space-y-6 text-left" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-stone-500 font-medium ml-2">Navn</label>
              <input 
                type="text" 
                placeholder="Ditt navn" 
                className="w-full px-6 py-4 bg-stone-50 border border-stone-200 rounded-2xl focus:ring-2 focus:ring-[#D97706] focus:border-transparent outline-none transition-all"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-stone-500 font-medium ml-2">E-post</label>
              <input 
                type="email" 
                placeholder="Din e-postadresse" 
                className="w-full px-6 py-4 bg-stone-50 border border-stone-200 rounded-2xl focus:ring-2 focus:ring-[#D97706] focus:border-transparent outline-none transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-stone-500 font-medium ml-2">Ønsket kattetype / alder / kjønn</label>
              <input 
                type="text" 
                placeholder="F.eks. kattunge, hunnkatt, o.l." 
                className="w-full px-6 py-4 bg-stone-50 border border-stone-200 rounded-2xl focus:ring-2 focus:ring-[#D97706] focus:border-transparent outline-none transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-stone-500 font-medium ml-2">Kommentar</label>
              <textarea 
                rows={4}
                placeholder="Skriv en melding her..." 
                className="w-full px-6 py-4 bg-stone-50 border border-stone-200 rounded-2xl focus:ring-2 focus:ring-[#D97706] focus:border-transparent outline-none transition-all resize-none"
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full py-5 bg-[#F97316] text-white rounded-full text-xl font-bold shadow-lg hover:bg-[#EA580C] hover:shadow-xl transition-all transform hover:-translate-y-1 active:scale-95"
            >
              Meld deg på
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default WaitingList;
