import React from 'react';

interface OfferCardProps {
  category: string;
  title: string;
  description: string;
  imageUrl: string;
}

const OfferCard: React.FC<OfferCardProps> = ({ category, title, description, imageUrl }) => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  
  return (
  <article className="bg-white border border-[#e8ecf5] rounded-2xl shadow-[0_10px_25px_rgba(10,20,60,0.08)] overflow-hidden flex flex-col">
    <img src={imageUrl} alt={title} className="w-full h-40 object-cover" />
    <div className="p-5 flex flex-col flex-grow">
      <span className="inline-block bg-[#F2B705]/[0.16] text-[#8a6800] border border-[#F2B705]/[0.35] py-1 px-2.5 rounded-full font-bold text-xs self-start">
        {category}
      </span>
      <h3 className="text-xl font-bold my-2 text-gray-900">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a 
        href="#contacto" 
        onClick={(e) => handleScroll(e, 'contacto')}
        className="mt-auto inline-block text-center py-2 px-4 rounded-xl font-bold border-2 border-[#0B2C6B] text-[#0B2C6B] bg-white hover:bg-gray-50 transition-colors duration-200"
      >
        Más información
      </a>
    </div>
  </article>
  );
};


const AcademicOffer: React.FC = () => {
  const offers = [
    {
      category: "Formación Continua",
      title: "Cursos Especializados",
      description: "Programas de corta duración para adquirir habilidades específicas en áreas de alta demanda laboral.",
      imageUrl: "https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      category: "Formación Continua",
      title: "Talleres Prácticos",
      description: "Experiencias de aprendizaje intensivas para desarrollar competencias técnicas y creativas de forma rápida.",
      imageUrl: "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      category: "Formación Continua",
      title: "Diplomados",
      description: "Programas completos que profundizan en un campo de estudio para una especialización profesional sólida.",
      imageUrl: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  return (
    <section id="oferta" className="py-14">
      <div className="max-w-[1120px] w-[92%] mx-auto">
        <div className="flex items-end justify-between gap-4 mb-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Oferta académica</h2>
            <p className="text-gray-500 mt-1">Programas y áreas formativas</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {offers.map((offer, index) => (
            <OfferCard key={index} {...offer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademicOffer;
