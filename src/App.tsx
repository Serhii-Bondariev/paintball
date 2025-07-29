import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SocialModal from './components/SocialModal';

export function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [socialLink, setSocialLink] = useState('');
  const [socialName, setSocialName] = useState('');

  const handleSocialClick = (link: string, name: string) => {
    setSocialLink(link);
    setSocialName(name);
    setModalOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-neutral-100">
      <Header onSocialClick={handleSocialClick} />
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Contact onSocialClick={handleSocialClick} />
      </main>
      <Footer onSocialClick={handleSocialClick} />
      <SocialModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        socialLink={socialLink}
        socialName={socialName}
      />
    </div>
  );
}

export default App;