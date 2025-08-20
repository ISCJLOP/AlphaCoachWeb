import React from 'react';

const Gallery: React.FC = () => {
  const images = [
    { src: "https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Equipo de estudiantes colaborando en una mesa de reuniones." },
    { src: "https://images.pexels.com/photos/1181408/pexels-photo-1181408.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Profesor dando una clase a estudiantes en un aula moderna." },
    { src: "https://images.pexels.com/photos/1400172/pexels-photo-1400172.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Grupo de graduados sonriendo y celebrando su logro." },
    { src: "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Fachada de un edificio universitario clásico con un gran césped." },
    { src: "https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Estudiante sonriente usando auriculares y una laptop en la biblioteca." },
    { src: "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Científico trabajando con un microscopio en un laboratorio." },
    { src: "https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Pasillo de una biblioteca con estanterías llenas de libros." },
    { src: "https://images.pexels.com/photos/1206101/pexels-photo-1206101.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Estudiantes caminando por el campus con sus mochilas." },
  ];
  
  return (
    <section id="galeria" className="py-14">
      <div className="max-w-[1120px] w-[92%] mx-auto">
        <div className="flex items-end justify-between gap-4 mb-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Galería</h2>
            <p className="text-gray-500 mt-1">Vida estudiantil e instalaciones</p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-xl shadow-md">
              <img 
                src={image.src} 
                alt={image.alt} 
                className="h-48 w-full object-cover transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer" 
              />
            </div>
          ))}
        </div>
        <p className="text-center text-gray-500 mt-6">
          Encuentra más momentos en nuestra <a href="https://www.facebook.com/CentrodeestudiosAlpha/photos" target="_blank" rel="noopener noreferrer" className="text-[#0B2C6B] font-semibold hover:underline">página de Facebook</a>.
        </p>
      </div>
    </section>
  );
};

export default Gallery;