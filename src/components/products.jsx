const Products = () => {
  const products = [
    {
      icon: '⚙️',
      title: 'Industrial Valves Division',
      description: 'Uni-Tec Trade Inc. has a valve division that handles all industrial valves, including Butterfly Valve needs in Electric & Pneumatic applications.',
      features: [
        'Actuators and actuated butterfly valves',
        'Actuated ball valves',
        'Multiple sizes, shapes, and materials',
        'Custom configurations available'
      ]
    },
    {
      icon: '⚠️',
      title: 'Safety & Caution Tapes',
      description: 'Custom Caution Tape and barricade tapes are an effective method to limit entry to hazardous or restricted areas.',
      features: [
        'Highly visible messages',
        'Crime scenes & fire scenes',
        'Construction & industrial sites',
        'Sporting venues & crowd control'
      ]
    },
    {
      icon: '🚢',
      title: 'Marine Applications',
      description: 'Proud history of building marine diesel engines for ship propulsion and ship service, proven reliable in the toughest conditions.',
      features: [
        'World-class service & engineering',
        'Diesel engine inspection programs',
        'Quality OEM replacement parts',
        'Factory-direct support'
      ]
    }
  ];

  const scrollToDetailedProducts = () => {
    const element = document.getElementById('detailed-products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="products" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">
            Our Offerings
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy-500 mt-2 mb-4">
            Featured Product Divisions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Uni-Tec has the parts you need when you need them at the right price
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-gray-200 overflow-hidden group hover:border-primary-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl relative"
            >
              {/* Gradient Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              
              {/* Icon */}
              <div className="bg-gray-100 h-56 flex items-center justify-center text-8xl group-hover:bg-gradient-to-br group-hover:from-navy-500 group-hover:to-navy-700 transition-all duration-300 relative z-10">
                <span className="group-hover:scale-110 transition-transform duration-300 group-hover:filter group-hover:grayscale-0 filter grayscale-0 group-hover:text-primary-500">
                  {product.icon}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 relative z-10">
                <h3 className="text-2xl font-serif font-bold text-navy-500 mb-3 group-hover:text-primary-500 transition-colors">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {product.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-gray-700 text-sm">
                      <span className="text-primary-500 mr-2 mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={scrollToDetailedProducts}
                  className="bg-navy-500 text-white px-6 py-2.5 rounded font-semibold hover:bg-primary-500 transition-all duration-300 w-full"
                >
                  Browse Products
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;