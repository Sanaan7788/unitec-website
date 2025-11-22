import videoFile from '../assets/hero-video.mp4';
import posterFile from '../assets/hero-poster.jpg';
const Hero = () => {
  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-[600px] mt-20 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="{posterFile}"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={videoFile} />
          {/* Fallback gradient if video doesn't load */}
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-700/90 to-navy-500/80 z-10"></div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 z-10" style={{
        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(59, 130, 246, 0.3) 2px, rgba(59, 130, 246, 0.3) 4px)'
      }}></div>

      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
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
    </section>
  );
};

export default Hero;