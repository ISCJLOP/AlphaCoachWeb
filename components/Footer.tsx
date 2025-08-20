import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-8 bg-[#0B2C6B] text-[#eef2ff] py-8">
      <div className="max-w-[1120px] w-[92%] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mt-0 text-white">Alpha Coach A.C.</h3>
            <p className="opacity-90 mt-2">Formación integral humana para el presente y el futuro.</p>
          </div>
          <div>
            <h4 className="font-bold text-white">Explorar</h4>
            <div className="flex flex-col gap-2 mt-2">
              <a href="#oferta" className="opacity-90 hover:opacity-100 hover:underline">Oferta</a>
              <a href="#ubicaciones" className="opacity-90 hover:opacity-100 hover:underline">Ubicaciones</a>
              <a href="#galeria" className="opacity-90 hover:opacity-100 hover:underline">Galería</a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-white">Contacto</h4>
            <p className="mt-2 opacity-90">+52 1 962 292 5644</p>
            <p className="opacity-90">centroprofesionalalphacoach@gmail.com</p>
          </div>
          <div>
            <h4 className="font-bold text-white">Redes</h4>
            <div className="flex gap-2.5 mt-2">
              <a href="https://www.facebook.com/CentrodeestudiosAlpha" target="_blank" rel="noopener noreferrer" className="opacity-90 hover:opacity-100 hover:underline">Facebook</a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="opacity-90 hover:opacity-100 hover:underline">Instagram</a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="opacity-90 hover:opacity-100 hover:underline">YouTube</a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/20 mt-6 pt-4 text-sm opacity-90 text-center lg:text-left">
          © {currentYear} Alpha Coach A.C. – Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;