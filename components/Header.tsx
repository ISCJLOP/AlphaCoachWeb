
import React from 'react';
import { useState, useCallback } from 'react';

interface HeaderProps {
  logoSrc: string;
}

const NavLink: React.FC<{ href: string; children: React.ReactNode; isCta?: boolean; onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void; }> = ({ href, children, isCta = false, onClick }) => {
  const baseClasses = "py-2 px-3 rounded-xl font-semibold text-base transition-colors duration-200";
  const ctaClasses = "bg-gradient-to-br from-[#F2B705] to-[#F28C0F] text-black shadow-[0_10px_25px_rgba(10,20,60,0.08)] font-bold";
  const defaultClasses = "text-[#0B2C6B] hover:bg-[#0B2C6B]/[0.06]";
  
  return (
    <a href={href} onClick={onClick} className={`${baseClasses} ${isCta ? ctaClasses : defaultClasses}`}>
      {children}
    </a>
  );
};

const Header: React.FC<HeaderProps> = ({ logoSrc }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = useCallback((e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false); // Close menu on navigation
  }, []);

  const navItems = [
    { href: "#oferta", label: "Oferta" },
    { href: "#ubicaciones", label: "Ubicaciones" },
    { href: "#galeria", label: "Galería" },
    { href: "#contacto", label: "Contacto", isCta: true },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/85 backdrop-saturate-180 backdrop-blur-md border-b border-[#eaeef6]">
      <div className="max-w-[1120px] w-[92%] mx-auto flex items-center justify-between py-2.5">
        <a href="#inicio" onClick={(e) => handleScroll(e, 'inicio')} className="flex items-center gap-2.5 font-extrabold text-[#0B2C6B] text-lg">
          <img src={logoSrc} alt="Alpha Coach A.C." className="w-10 h-10 rounded-full object-cover" />
          <span>Alpha Coach A.C.</span>
        </a>
        <nav className="hidden lg:flex items-center gap-2">
          {navItems.map(item => (
             <NavLink key={item.href} href={item.href} isCta={item.isCta} onClick={(e) => handleScroll(e, item.href.substring(1))}>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <button className="lg:hidden border-0 bg-transparent p-1.5 cursor-pointer" aria-label="Abrir menú" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M3 6h18M3 12h18M3 18h18" stroke="#0B2C6B" strokeWidth="2" strokeLinecap="round"/></svg>
        </button>
      </div>
      {isMenuOpen && (
        <nav className="lg:hidden flex flex-col items-center gap-4 py-4 bg-white border-t border-[#eaeef6]">
          {navItems.map(item => (
            <NavLink key={item.href} href={item.href} isCta={item.isCta} onClick={(e) => handleScroll(e, item.href.substring(1))}>
              {item.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;