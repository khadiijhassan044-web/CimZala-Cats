
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover brightness-[0.7]"
        >
          <source src="/assets/freepik_smooth-horizontal-swipe-transition-from-right-to-l_kling_720p_9-16_24fps_75798.mp4" type="video/mp4" />

        </video>
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h1 className="text-5xl md:text-7xl lg:text-8xl text-white mb-12 drop-shadow-lg leading-tight">
          En Venn Vil Møte Deg...
        </h1>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a 
            href="#cats" 
            className="px-10 py-4 bg-white/20 backdrop-blur-md text-white border border-white/40 rounded-full text-lg font-medium hover:bg-white/30 transition-all transform hover:scale-105"
          >
            Se kattunger
          </a>
          <a 
            href="#about" 
            className="px-10 py-4 bg-white/20 backdrop-blur-md text-white border border-white/40 rounded-full text-lg font-medium hover:bg-white/30 transition-all transform hover:scale-105"
          >
            Om oss
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/60">
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
