
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header 
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Heart className="h-6 w-6 text-medical-blue mr-2" />
          <span className="text-xl font-bold text-medical-blue">Cuidado</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#home" className="text-gray-800 hover:text-medical-blue font-medium">Inicio</a>
          <a href="#services" className="text-gray-800 hover:text-medical-blue font-medium">Servicios</a>
          <a href="#testimonials" className="text-gray-800 hover:text-medical-blue font-medium">Testimonios</a>
          <a href="#contact" className="text-gray-800 hover:text-medical-blue font-medium">Contacto</a>
        </nav>

        {/* Appointment button */}
        <div className="hidden md:block">
          <Button className="bg-medical-blue hover:bg-blue-700 text-white">
            Agenda una cita
          </Button>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-medical-blue"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            className="h-6 w-6"
          >
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a href="#home" className="text-gray-800 hover:text-medical-blue font-medium">Inicio</a>
            <a href="#services" className="text-gray-800 hover:text-medical-blue font-medium">Servicios</a>
            <a href="#testimonials" className="text-gray-800 hover:text-medical-blue font-medium">Testimonios</a>
            <a href="#contact" className="text-gray-800 hover:text-medical-blue font-medium">Contacto</a>
            <Button className="bg-medical-blue hover:bg-blue-700 text-white w-full">
              Agenda una cita
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
