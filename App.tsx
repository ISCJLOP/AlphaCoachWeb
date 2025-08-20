import React from 'react';
import { useEffect } from 'react';
import TopBanner from './components/TopBanner';
import Header from './components/Header';
import Hero from './components/Hero';
import AcademicOffer from './components/AcademicOffer';
import ValuesRVOE from './components/ValuesRVOE';
import Locations from './components/Locations';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

// URL for the Alpha Coach A.C. logo
const ALPHA_LOGO_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7xZJEC-8D3fJMWVwMfIezCvclIZPOBHauMA&s";

function App() {
  useEffect(() => {
    // Set favicon dynamically
    const favicon = document.createElement('link');
    favicon.rel = 'icon';
    favicon.href = ALPHA_LOGO_URL;
    favicon.type = 'image/jpeg';
    document.head.appendChild(favicon);

    // Set Open Graph image
    let ogImage = document.querySelector<HTMLMetaElement>('meta[property="og:image"]');
    if (!ogImage) {
      ogImage = document.createElement('meta');
      ogImage.setAttribute('property', 'og:image');
      document.head.appendChild(ogImage);
    }
    ogImage.content = ALPHA_LOGO_URL;
    
    return () => {
      document.head.removeChild(favicon);
    };
  }, []);


  return (
    <div className="bg-[#F7F8FC] text-gray-800 leading-relaxed">
      <TopBanner />
      <Header logoSrc={ALPHA_LOGO_URL} />
      <main>
        <Hero logoSrc={ALPHA_LOGO_URL} />
        <AcademicOffer />
        <ValuesRVOE />
        <Gallery />
        <Contact />
        <Locations />
      </main>
      <Footer />
      <WhatsAppButton phoneNumber="5219622925644" />
    </div>
  );
}

export default App;