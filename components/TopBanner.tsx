
import React from 'react';

const TopBanner: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="bg-gradient-to-r from-[#0B2C6B] to-[#082252] text-white py-2.5 px-4 text-center text-sm font-medium">
      <p>
        ¡Inscripciones abiertas para el nuevo ciclo escolar!{' '}
        <a 
          href="#contacto" 
          onClick={(e) => handleScroll(e, 'contacto')}
          className="font-bold text-[#F2B705] hover:text-white underline transition-colors duration-200"
        >
          Contacta con nosotros y asegura tu lugar.
        </a>
      </p>
    </div>
  );
};

export default TopBanner;
