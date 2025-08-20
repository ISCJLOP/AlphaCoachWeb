import React from 'react';

interface WhatsAppButtonProps {
  phoneNumber: string; // Should be in the format: country_code + number without '+' or spaces
  message?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ phoneNumber, message = "Hola, me gustaría recibir más información." }) => {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 ease-in-out hover:scale-110"
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.423 5.577C16.423 3.577 13.823 2.5 11.023 2.5C5.823 2.5 1.623 6.7 1.623 11.9C1.623 13.6 2.023 15.3 2.823 16.8L1.523 21.2L6.123 19.9C7.523 20.6 9.223 21 11.023 21H11.023C16.223 21 20.423 16.8 20.423 11.6C20.423 8.8 19.423 6.577 18.423 5.577ZM11.023 19.5C9.423 19.5 7.823 19.1 6.523 18.3L6.123 18.1L2.923 18.9L3.723 15.8L3.523 15.4C2.723 14 2.323 12.5 2.323 11.9C2.323 7.2 6.223 3.3 11.023 3.3C13.423 3.3 15.623 4.2 17.323 5.9C18.923 7.6 19.823 9.8 19.823 11.6C19.823 16.3 15.823 19.5 11.023 19.5ZM15.323 13.9C15.023 13.8 13.823 13.2 13.623 13.1C13.423 13.001 13.223 13.001 13.023 13.2C12.823 13.5 12.323 14 12.123 14.2C11.923 14.3 11.823 14.4 11.523 14.2C11.223 14.1 10.123 13.7 8.823 12.6C7.923 11.9 7.323 11.1 7.123 10.8C6.923 10.5 7.023 10.4 7.223 10.2L7.423 10C7.523 9.899 7.623 9.7 7.723 9.5C7.823 9.3 7.723 9.2 7.623 9L7.123 7.8C7.023 7.6 6.823 7.5 6.623 7.5H6.223C6.023 7.5 5.723 7.6 5.523 7.8C5.323 8.1 4.823 8.5 4.823 9.7C4.823 10.9 5.523 12 5.623 12.2C5.823 12.3 7.123 14.4 9.223 15.3C11.223 16.1 11.823 15.8 12.323 15.8C12.723 15.7 13.723 15.2 13.923 14.6C14.123 14.1 14.123 13.6 14.023 13.5C13.923 13.4 13.823 13.3 13.623 13.3"
        />
      </svg>
    </a>
  );
};

export default WhatsAppButton;