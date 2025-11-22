const Partnership = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-navy-700 to-navy-500 text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Authorized Fairbanks Morse Engine Distributor
            </h2>
            <p className="text-lg text-gray-200 mb-4 leading-relaxed">
              Fairbanks Morse Engine is a worldwide leader in the technology and manufacturing of engines used primarily in marine and power generation applications.
            </p>
            <p className="text-lg text-gray-200 mb-4 leading-relaxed">
              Fairbanks Morse manufactures high quality diesel engines and generator sets, dual-fuel engines and original equipment parts, all backed with world-class field service.
            </p>
            <p className="text-xl font-semibold text-primary-300 mb-6">
              Principal supplier of medium-speed diesel engines to the U.S. Navy
            </p>
            
            {/* Badges */}
            <div className="flex flex-wrap gap-4">
              <span className="bg-white/10 border border-white/30 px-4 py-2 rounded">Engines</span>
              <span className="bg-white/10 border border-white/30 px-4 py-2 rounded">Generators</span>
              <span className="bg-white/10 border border-white/30 px-4 py-2 rounded">OEM Parts</span>
              <span className="bg-white/10 border border-white/30 px-4 py-2 rounded">U.S. Navy Supplier</span>
            </div>
          </div>

          {/* Navy Badge */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-12 text-center border border-white/20">
            <div className="text-7xl mb-4">⚓</div>
            <h3 className="text-2xl font-serif font-bold mb-2">U.S. Navy Supplier</h3>
            <p className="text-gray-300">Authorized Fairbanks Morse Engine Distributor</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnership;