
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import CatGrid from './components/CatGrid';
import Kattehotell from './components/Kattehotell';
import WaitingList from './components/WaitingList';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="relative scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        {/* Ordered as requested: Om oss -> Cats -> Kattehotell -> Venteliste -> Kontakt */}
        <AboutUs />
        <CatGrid />
        <Kattehotell />
        <WaitingList />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;
