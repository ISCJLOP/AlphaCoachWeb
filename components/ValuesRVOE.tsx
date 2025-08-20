
import React from 'react';

// SVG Icons for values
const ExcellenceIcon = () => (
  <svg className="w-10 h-10 text-[#F2B705]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.293 2.293a1 1 0 010 1.414L10 16l-4 4-4-4 5.293-5.293a1 1 0 011.414 0z"></path></svg>
);

const IntegrityIcon = () => (
  <svg className="w-10 h-10 text-[#F2B705]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
);

const CommunityIcon = () => (
  <svg className="w-10 h-10 text-[#F2B705]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
);

// SVG Logos for SEP
const SEPGobiernoLogo = () => (
  <svg width="120" height="80" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Logo del Gobierno de México" className="rounded-lg shadow-md">
    <rect width="120" height="80" fill="#8C0E3A"/>
    <text fill="white" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="bold" x="10" y="25">GOBIERNO DE</text>
    <text fill="white" fontFamily="Inter, sans-serif" fontSize="24" fontWeight="bold" x="10" y="55">MÉXICO</text>
  </svg>
);

const SEPEducacionLogo = () => (
 <svg width="120" height="80" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Logo de la Secretaría de Educación Pública" className="rounded-lg shadow-md">
    <rect width="120" height="80" fill="#8C0E3A"/>
    <text fill="white" fontFamily="Inter, sans-serif" fontSize="14" fontWeight="bold" x="10" y="30">EDUCACIÓN</text>
    <rect x="10" y="40" width="100" height="1" fill="white" opacity="0.5"/>
    <text fill="white" fontFamily="Inter, sans-serif" fontSize="6.5" fontWeight="normal" x="10" y="55">SECRETARÍA DE</text>
    <text fill="white" fontFamily="Inter, sans-serif" fontSize="6.5" fontWeight="normal" x="10" y="65">EDUCACIÓN PÚBLICA</text>
  </svg>
);


const ValuesRVOE: React.FC = () => {
  const values = [
    {
      icon: <ExcellenceIcon />,
      title: 'Excelencia Académica',
      description: 'Nos comprometemos a ofrecer una educación de la más alta calidad, fomentando el pensamiento crítico y la superación constante.',
    },
    {
      icon: <IntegrityIcon />,
      title: 'Integridad y Ética',
      description: 'Actuamos con honestidad, transparencia y respeto en todas nuestras interacciones, formando profesionales con sólidos valores.',
    },
    {
      icon: <CommunityIcon />,
      title: 'Comunidad y Colaboración',
      description: 'Fomentamos un ambiente de apoyo mutuo, donde estudiantes y docentes colaboran para alcanzar metas comunes.',
    },
  ];

  return (
    <section id="valores" className="py-14 bg-white">
      <div className="max-w-[1120px] w-[92%] mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Valores y Reconocimiento Oficial</h2>
          <p className="text-gray-500 mt-1">Nuestro compromiso con la excelencia y la validez académica.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {values.map((value, index) => (
            <div key={index} className="text-center p-6 bg-gray-50 rounded-2xl border border-gray-200">
              <div className="flex justify-center items-center mb-4 text-[#0B2C6B]">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#0B2C6B] text-white rounded-2xl p-8 lg:p-10 flex flex-col md:flex-row items-center gap-8 shadow-[0_15px_30px_rgba(11,44,107,0.2)]">
          <div className="flex-shrink-0 flex items-center gap-4">
            <SEPGobiernoLogo />
            <SEPEducacionLogo />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-[#F2B705]">Validez Oficial SEP y RVOE Federal</h3>
            <p className="mt-2 opacity-90">
              Todos nuestros programas cuentan con Reconocimiento de Validez Oficial de Estudios (RVOE) a nivel federal. Las constancias de registro ante la Secretaría de Educación Pública (SEP) garantizan que tu formación es reconocida y válida en todo México y a nivel internacional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesRVOE;
