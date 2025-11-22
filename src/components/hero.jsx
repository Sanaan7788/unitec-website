import { useState, useEffect } from 'react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: 'MARINE',
      gradient: 'from-navy-700 to-navy-500'
    },
    {
      title: 'OIL & GAS',
      gradient: 'from-navy-500 to-primary-700'
    },
    {
      title: 'POWER',
      gradient: 'from-primary-700 to-navy-700'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-[600px] mt-20 overflow-hidden">
      {/* Slideshow Background */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1500 ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className={`w-full h-full bg-gradient-to-br ${slide.gradient}`}>
              <div className="absolute inset-0 opacity-10">
                <div className="text-center text-white text-9xl font-serif font-bold flex items-center justify-center h-full">
                  {slide.title}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-700/90 to-navy-500/80"></div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(59, 130, 246, 0.3) 2px, rgba(59, 130, 246, 0.3) 4px)'
      }}></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container-custom px-4 md:px-8">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-block mb-6 animate-fade-in">
              <span className="bg-primary-500/20 border border-primary-500 text-primary-100 px-4 py-2 rounded-full text-sm font-semibold tracking-wider">
                TRUSTED SINCE 2002
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight animate-slide-up">
              Global Procurement & Supply Solutions
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Delivering cost-effective product solutions and exceptional support services to the Marine, Oil, Gas, and Power industries worldwide.
            </p>

            {/* Single Button */}
            <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <button 
                onClick={scrollToProducts}
                className="btn-primary text-lg"
              >
                View Products
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 ${
              currentSlide === index 
                ? 'w-8 h-3 bg-primary-500 rounded-full' 
                : 'w-3 h-3 bg-white/40 rounded-full hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;