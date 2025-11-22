const Brands = () => {
  const brands = [
    'EMERSON', 'ASCO', 'BETTIS', 'FISHER', 'ANDERSON GREENWOOD', 'VELAN',
    'GE DRESSER', 'BRAY', 'DWYER', 'MUELLER CO.', 'SWAGELOK', 'PARKER',
    'NIBCO', 'FLOWSERVE', 'KITZ', 'GARLOCK', 'CRANE', 'WARREN CONTROLS',
    'PENTAIR', 'IMI NORGREN', 'HYDAC', 'FMC TECHNOLOGIES', 'Fairbanks Morse', 'Colt-Pielstick'
  ];

  return (
    <section id="brands" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">
            Our Partners
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy-500 mt-2 mb-4">
            Authorized Brands & Manufacturers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here is a small sample of the products that we can provide for you
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 mb-12">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-200 p-6 rounded-lg text-center group hover:border-primary-500 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-white relative overflow-hidden"
            >
              {/* Shimmer Effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 bg-gradient-to-r from-transparent via-primary-500/10 to-transparent"></div>
              
              <span className="font-semibold text-navy-500 group-hover:text-primary-500 transition-colors duration-300 relative z-10 group-hover:scale-105 inline-block">
                {brand}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 max-w-2xl mx-auto">
          <h3 className="text-3xl font-serif font-bold text-navy-500 mb-4">
            Can't find what you're looking for?
          </h3>
          <p className="text-xl text-gray-600 mb-6">
            Email us today or call to speak with a representative
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="tel:7139725153" className="text-2xl font-semibold text-primary-500 hover:text-primary-600">
              713-972-5153
            </a>
            <span className="hidden sm:inline text-gray-400">|</span>
            <a href="tel:8326054446" className="text-2xl font-semibold text-primary-500 hover:text-primary-600">
              832-605-4446
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;