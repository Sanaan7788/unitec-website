import { useState, useEffect } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white shadow-md'
      }`}
    >
      <div className="container-custom px-4 md:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex flex-col">
            <a 
              href="https://www.unitecusa.com/" 
              className="font-serif text-2xl md:text-3xl font-bold text-navy-500 hover:text-primary-500 transition-colors"
            >
              Unitecusa
            </a>
            <p className="text-xs md:text-sm text-gray-600 italic mt-1">
              Serving the Marine, Oil, Gas & Power industry since 2002
            </p>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-primary-500 font-medium transition-colors relative group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button 
              onClick={() => scrollToSection('products')}
              className="text-gray-700 hover:text-primary-500 font-medium transition-colors relative group"
            >
              Products
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-primary-500 font-medium transition-colors relative group"
            >
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button 
              onClick={() => scrollToSection('brands')}
              className="text-gray-700 hover:text-primary-500 font-medium transition-colors relative group"
            >
              Brands
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-navy-500 text-white px-6 py-2.5 rounded font-semibold hover:bg-primary-500 transition-all duration-300 border-2 border-navy-500 hover:border-primary-500"
            >
              Contact Us
            </button>
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-navy-500 hover:text-primary-500 transition-colors p-2"
            aria-label="Toggle menu"
          >
            <div className="relative w-8 h-8">
              <HiMenuAlt3 
                className={`absolute inset-0 w-8 h-8 transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0 rotate-180 scale-0' : 'opacity-100 rotate-0 scale-100'
                }`}
              />
              <HiX 
                className={`absolute inset-0 w-8 h-8 transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-180 scale-0'
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="flex flex-col gap-4 py-4 border-t border-gray-200">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-primary-500 font-medium transition-colors text-left py-2 hover:bg-gray-50 px-4 rounded"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('products')}
              className="text-gray-700 hover:text-primary-500 font-medium transition-colors text-left py-2 hover:bg-gray-50 px-4 rounded"
            >
              Products
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-primary-500 font-medium transition-colors text-left py-2 hover:bg-gray-50 px-4 rounded"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('brands')}
              className="text-gray-700 hover:text-primary-500 font-medium transition-colors text-left py-2 hover:bg-gray-50 px-4 rounded"
            >
              Brands
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-navy-500 text-white px-6 py-3 rounded font-semibold hover:bg-primary-500 transition-all duration-300 text-center"
            >
              Contact Us
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;