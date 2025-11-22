const ProductList = () => {
  const products = [
    { name: 'Bearings', desc: 'Wide range of bearings including roller, ball, clip, and sleeve bearings, rotary shaft seals, slewing rings, and wear sleeves.' },
    { name: 'Power Generator Applications', desc: 'Over 100 Fairbanks Morse engine generator sets in service in power plants across the Americas.' },
    { name: 'Valves', desc: 'Complete line of valves including Ball, Gate, Globe, Check, Butterfly, Safety, and Plug valves.' },
    { name: 'Pumps', desc: 'Centrifugal, Flow, Booster, Fire, Multistage, Regenerative Turbine, Submersible, Vertical Turbine, Diaphragm, Gear, and Metering pumps.' },
    { name: 'Switches', desc: 'Wide variety of switches and circuit styles for any system control needs.' },
    { name: 'Motors', desc: 'Commercial and industrial motors including HVAC, farm-duty, pump, and vacuum motors with motor supplies.' },
    { name: 'Cathodic Protection', desc: 'Variety of cathodic protection design and engineering services for corrosion prevention.' },
    { name: 'Industrial Tapes', desc: 'Custom caution, warning, and danger tapes with company branding and barricade tape printing.' },
    { name: 'Instrumentation Products', desc: 'Accurate and reliable devices for pressure, temperature, flow, level, positioning, weighing, recording and control.' },
    { name: 'Actuators', desc: 'Designed for challenging environments with various configurations for quick dispatch.' },
    { name: 'Compressors', desc: 'Industrial compressors from 50–2,000 HP including reciprocating and screw compressors.' },
    { name: 'Tools', desc: 'Heavy-duty hand tools, air tools, power tools, and material handling products.' },
    { name: 'Industrial Filters', desc: 'Worldwide engineering and manufacturing for optimum industrial filtration solutions.' },
    { name: 'Sensors & Transmitters', desc: 'Temperature, pressure, flow, and level sensors and transmitters for industrial applications.' },
    { name: 'Seals', desc: 'Hydraulic, Pneumatic, Piston, and various specialized seals for industrial use.' }
  ];

  return (
    <section id="detailed-products" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">
            Complete Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy-500 mt-2 mb-4">
            Comprehensive Product Range
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We supply the highest quality process control, automation, safety, and industrial products from world class manufacturers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg border border-gray-200 hover:border-primary-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden"
            >
              {/* Bottom Gradient Effect */}
              <div className="absolute bottom-0 left-0 right-0 h-0 bg-gradient-to-t from-primary-500/10 to-transparent group-hover:h-full transition-all duration-300"></div>
              
              <div className="relative z-10">
                <h3 className="text-xl font-serif font-bold text-navy-500 mb-3 group-hover:text-primary-500 group-hover:translate-x-1 transition-all duration-300">
                  {product.name}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-900 transition-colors">
                  {product.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;