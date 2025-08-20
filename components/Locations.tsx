
import React from 'react';

const Locations: React.FC = () => {
  return (
    <section id="ubicaciones" className="py-14 bg-white">
      <div className="max-w-[1120px] w-[92%] mx-auto">
        <div className="flex items-end justify-between gap-4 mb-6">
           <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Ubicación</h2>
            <p className="text-gray-500 mt-1">Encuéntranos fácilmente</p>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="rounded-2xl overflow-hidden border border-[#e8ecf5] shadow-[0_10px_25px_rgba(10,20,60,0.08)] h-[450px]">
            <iframe 
              title="Mapa del plantel" 
              width="100%" 
              height="100%" 
              className="border-0"
              loading="lazy" 
              allowFullScreen 
              referrerPolicy="no-referrer-when-downgrade" 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30843.43985485266!2d-92.28898493649214!3d14.91311897908992!2m3!1f0!2f0!3f0!3m2!i1024!2i768!4f13.1!3m3!1m2!1s0x858e0ed9925bb7c9%3A0xa71b5fe38dfdec41!2sLos%20Naranjos%2C%20Centro%2C%2030710%20Tapachula%2C%20Chis.!5e0!3m2!1ses-419!2smx!4v1755713492805!5m2!1ses-419!2smx">
            </iframe>
          </div>
          <div className="bg-white border border-[#e8ecf5] rounded-2xl p-6 shadow-[0_10px_25px_rgba(10,20,60,0.08)] flex flex-col justify-center h-full">
            <h3 className="text-2xl font-bold text-gray-900">Plantel Tapachula</h3>
            <p className="text-gray-600 my-3 text-lg">
              Central Norte No. 129 entre 17 y 19 Oriente,<br/>
              Tapachula, Chiapas, México
            </p>
            <p className="text-gray-600"><strong>Horario:</strong> Lun–Vie 8:00–18:00</p>
            <a href="https://www.google.com/maps/place/Los+Naranjos,+Centro,+30710+Tapachula,+Chis./@14.913119,-92.272579,15z/data=!3m1!4b1!4m6!3m5!1s0x858e0ed9925bb7c9:0xa71b5fe38dfdec41!8m2!3d14.9142724!4d-92.2612938!16s%2Fg%2F1tdylw9z?entry=ttu" target="_blank" rel="noopener noreferrer" className="mt-5 inline-block text-center py-2.5 px-5 rounded-xl font-bold border-2 border-[#0B2C6B] text-[#0B2C6B] bg-white hover:bg-gray-50 transition-colors duration-200">
              Abrir en Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;
