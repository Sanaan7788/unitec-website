import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-navy-700 text-white">
      {/* Main Footer Content */}
      <div className="container-custom px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About */}
          <div>
            <h4 className="text-2xl font-serif font-bold text-primary-300 mb-4">
              About Uni-Tec
            </h4>
            <p className="text-gray-300 leading-relaxed mb-4">
              Since its inception in 2002, Uni-Tec Trade Inc. has been providing cost effective product solutions and support services to its local & over-seas clients in the Oil, Gas, Power and various other industrial applications.
            </p>
            <p className="text-gray-200 font-semibold">
              Fairness and reliability are the cornerstones of Uni-Tec's reputation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-2xl font-serif font-bold text-primary-300 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-primary-300 transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('products')} className="text-gray-300 hover:text-primary-300 transition-colors">
                  Products
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-primary-300 transition-colors">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('brands')} className="text-gray-300 hover:text-primary-300 transition-colors">
                  Brands
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-primary-300 transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Our Clients */}
          <div>
            <h4 className="text-2xl font-serif font-bold text-primary-300 mb-4">
              Our Clients
            </h4>
            <ul className="space-y-2 text-gray-300 mb-6">
              <li>ADNOC</li>
              <li>Qatar Petroleum</li>
              <li>U.S. Navy</li>
              <li>Military Sealift Command</li>
            </ul>

            {/* Contact Info in Footer */}
            <div className="space-y-3 mt-6">
              <h5 className="text-lg font-semibold text-primary-300 mb-3">Contact Us</h5>
              <div className="flex items-center gap-3 text-gray-300">
                <FaPhone className="text-primary-300" />
                <div className="flex gap-2 text-sm">
                  <a href="tel:7139725153" className="hover:text-primary-300 transition-colors">713-972-5153</a>
                  <span>|</span>
                  <a href="tel:8326054446" className="hover:text-primary-300 transition-colors">832-605-4446</a>
                </div>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <FaEnvelope className="text-primary-300" />
                <a href="mailto:deal@unitechusa.com" className="text-sm hover:text-primary-300 transition-colors">
                  deal@unitechusa.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <FaMapMarkerAlt className="text-primary-300" />
                <span className="text-sm">Houston, Texas, USA</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary-500 flex items-center justify-center transition-all duration-300 hover:-translate-y-1">
                <FaFacebook />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary-500 flex items-center justify-center transition-all duration-300 hover:-translate-y-1">
                <FaTwitter />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary-500 flex items-center justify-center transition-all duration-300 hover:-translate-y-1">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white/10 py-4 px-4 md:px-8">
        <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-2 text-sm text-gray-400">
          <p>© Copyright 2002-2024 Uni-Tec Trade Inc. All Rights Reserved.</p>
          <p>
            Website by{' '}
            <a 
              href="https://www.linkedin.com/in/sanaan7788/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-primary-300 hover:text-primary-400 transition-colors"
            >
              Sanaan
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;