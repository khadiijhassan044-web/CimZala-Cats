
import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-4xl mx-auto space-y-16">
        <div className="text-center">
            <h2 className="text-5xl md:text-6xl serif-font text-stone-800">Kontakt oss</h2>
            <div className="h-1 w-24 bg-[#A3B18A] mx-auto mt-8" />
        </div>

        <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
            <input 
                type="text" 
                placeholder="Navn" 
                className="w-full px-0 py-4 border-b border-stone-300 focus:border-[#A3B18A] outline-none transition-colors text-lg"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <input 
                type="email" 
                placeholder="Epost" 
                className="w-full px-0 py-4 border-b border-stone-300 focus:border-[#A3B18A] outline-none transition-colors text-lg"
            />
            <input 
                type="tel" 
                placeholder="Telefon" 
                className="w-full px-0 py-4 border-b border-stone-300 focus:border-[#A3B18A] outline-none transition-colors text-lg"
            />
          </div>

          <div className="pt-4">
            <textarea 
                rows={4}
                placeholder="Melding" 
                className="w-full px-0 py-4 border-b border-stone-300 focus:border-[#A3B18A] outline-none transition-colors text-lg resize-none"
            ></textarea>
          </div>

          <button 
            type="submit"
            className="px-16 py-4 bg-[#A3B18A] text-white text-lg tracking-widest hover:bg-[#8B9B73] transition-colors mt-8 font-light"
          >
            SEND
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
