
import React from 'react';

interface HeroProps {
  logoSrc: string;
}

const Hero: React.FC<HeroProps> = ({ logoSrc }) => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="inicio" className="relative overflow-hidden bg-gradient-to-b from-white to-[#f8f9fd] py-20 lg:py-24 bg-[radial-gradient(1000px_500px_at_100%_-10%,_rgba(242,183,5,0.25),_transparent_60%)] bg-[radial-gradient(800px_400px_at_-10%_110%,_rgba(242,140,15,0.18),_transparent_60%)]">
      <div className="max-w-[1120px] w-[92%] mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
        <div>
          <span className="inline-block bg-[#0B2C6B]/[0.07] text-[#0B2C6B] border border-[#0B2C6B]/[0.18] py-1.5 px-2.5 rounded-full font-bold text-sm">
            Centro de Formación Integral Humano
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight my-3 text-gray-900">
            Formación académica con valores, comunidad y excelencia
          </h1>
          <p className="text-gray-500 text-lg">
            Una plataforma simple para centralizar clases, tareas, exámenes, calificaciones y comunicación entre alumnos y docentes.
          </p>
          <div className="flex gap-3 mt-5 flex-wrap">
            <a href="#contacto" onClick={(e) => handleScroll(e, 'contacto')} className="inline-flex items-center gap-2.5 py-3 px-4 rounded-2xl font-bold border-2 border-transparent bg-gradient-to-br from-[#F2B705] to-[#F28C0F] text-gray-900 focus:outline-none focus:ring-4 focus:ring-[#0B2C6B]/20">
              Solicitar información
            </a>
            <a href="#oferta" onClick={(e) => handleScroll(e, 'oferta')} className="inline-flex items-center gap-2.5 py-3 px-4 rounded-2xl font-bold border-2 border-[#0B2C6B] text-[#0B2C6B] bg-white">
              Ver oferta académica
            </a>
          </div>
        </div>
        <div className="hidden lg:block flex justify-center items-center">
          <img src={logoSrc} alt="Sello institucional" className="max-w-xs mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
