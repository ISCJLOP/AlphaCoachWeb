
import React, { useState } from 'react';

// ===============================================================================================
// IMPORTANTE: Para que este formulario envíe correos, sigue los pasos de la guía.
// 1. Crea un Google Apps Script con el código proporcionado.
// 2. Despliega el script como una aplicación web.
// 3. Pega la URL de la aplicación web aquí abajo, reemplazando el valor actual.
// ===============================================================================================
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyeaILsVzxQR3u30FYjZA6gWjKE1CtytDT5eCp8PKufw7SMbAhIuUtBb-DfXI4aOJDj/exec';

const FormInput: React.FC<{ id: string; name: string; type: string; label: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; required?: boolean; placeholder?: string; disabled?: boolean; }> = 
({ id, name, type, label, value, onChange, required = false, placeholder = "", disabled = false }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-bold text-gray-800 mb-1.5">{label}</label>
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      placeholder={placeholder}
      disabled={disabled}
      className="w-full px-3 py-2.5 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F2B705]/80 focus:border-transparent transition-colors disabled:bg-gray-200 disabled:cursor-not-allowed"
    />
  </div>
);

const FormTextarea: React.FC<{ id: string; name: string; label: string; value: string; onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void; required?: boolean; placeholder?: string; disabled?: boolean; }> =
({ id, name, label, value, onChange, required = false, placeholder = "", disabled = false }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-bold text-gray-800 mb-1.5">{label}</label>
    <textarea
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      placeholder={placeholder}
      rows={4}
      disabled={disabled}
      className="w-full px-3 py-2.5 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F2B705]/80 focus:border-transparent transition-colors disabled:bg-gray-200 disabled:cursor-not-allowed"
    />
  </div>
);

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      // Usamos fetch para enviar los datos al script de Google
      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        body: new FormData(e.currentTarget),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' }); // Limpiar formulario
      } else {
        throw new Error('Network response was not ok.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-14 bg-white">
      <div className="max-w-[1120px] w-[92%] mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Mantente Conectado</h2>
          <p className="text-gray-500 mt-1">Envíanos tus dudas directamente o encuéntranos en Facebook.</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="bg-white border border-[#e8ecf5] rounded-2xl p-6 md:p-8 shadow-[0_10px_25px_rgba(10,20,60,0.08)]">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Envíanos un mensaje</h3>
            <p className="text-gray-600 mb-6">Nos pondremos en contacto contigo a la brevedad.</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <FormInput 
                id="name" 
                name="name" 
                type="text" 
                label="Nombre completo" 
                value={formData.name} 
                onChange={handleChange} 
                required 
                placeholder="Tu nombre y apellidos"
                disabled={isSubmitting}
              />
              <FormInput 
                id="email" 
                name="email" 
                type="email" 
                label="Correo electrónico" 
                value={formData.email} 
                onChange={handleChange} 
                required 
                placeholder="tu@correo.com"
                disabled={isSubmitting}
              />
              <FormInput 
                id="phone" 
                name="phone" 
                type="tel" 
                label="Teléfono (Opcional)" 
                value={formData.phone} 
                onChange={handleChange}
                placeholder="Tu número de teléfono"
                disabled={isSubmitting}
              />
              <FormTextarea 
                id="message" 
                name="message" 
                label="Mensaje" 
                value={formData.message} 
                onChange={handleChange} 
                required
                placeholder="Escribe tu consulta aquí..."
                disabled={isSubmitting}
              />
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl font-bold border-2 border-transparent bg-gradient-to-br from-[#F2B705] to-[#F28C0F] text-gray-900 focus:outline-none focus:ring-4 focus:ring-[#0B2C6B]/20 transition-all hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
              </button>
              {submitStatus === 'success' && (
                <p className="mt-4 text-center text-green-700 font-semibold bg-green-100 p-3 rounded-lg">
                  ¡Mensaje enviado con éxito! Gracias por contactarnos.
                </p>
              )}
              {submitStatus === 'error' && (
                <p className="mt-4 text-center text-red-700 font-semibold bg-red-100 p-3 rounded-lg">
                  Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.
                </p>
              )}
            </form>
          </div>
          <div className="w-full max-w-lg mx-auto lg:mx-0 rounded-2xl border border-[#e8ecf5] shadow-[0_10px_25px_rgba(10,20,60,0.08)] overflow-hidden">
            <iframe
              title="Página de Facebook de Alpha Coach A.C."
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FCentrodeestudiosAlpha&tabs=timeline%2Cmessages&width=500&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
              width="500"
              height="600"
              className="border-none w-full"
              scrolling="no"
              frameBorder="0"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
