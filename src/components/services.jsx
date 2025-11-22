const Services = () => {
  const services = [
    {
      title: 'Branding & Strategy',
      description: 'Understand the strategies required to effectively secure suitable partners and operators which are complimentary for the project being undertaken.',
      points: [
        'Strategic partner identification',
        'Operator selection & vetting',
        'Project compatibility assessment'
      ]
    },
    {
      title: 'Joint Ventures',
      description: 'With over 15 years experience, we have established relationships with a large network of suppliers which gives our clients an exceptional variety of choice in products and services.',
      points: [
        'Global supplier network',
        'Timely delivery to project sites',
        'Schedule & cost optimization'
      ]
    },
    {
      title: 'Technical Support',
      description: 'Contact us today for all of your Process Control, Automation, Safety, and Reliability needs.',
      points: [
        'Process Control systems',
        'Automation solutions',
        'Safety system integration',
        'Reliability engineering'
      ]
    },
    {
      title: 'Consulting',
      description: 'We help companies involved in several subsectors of the oil and gas industry:',
      points: [
        'Midstream operations',
        'Refining and marketing',
        'Oil field service',
        'Equipment manufacturing'
      ]
    }
  ];

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">
            What We Do
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy-500 mt-2 mb-4">
            Global Procurement and Supply
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our Clients depend on Uni-Tec Trade Inc. expertise for timely procurement of materials and equipment for their projects
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg border-l-4 border-primary-500 group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Shimmer Effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-primary-500/10 to-transparent"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-serif font-bold text-navy-500 mb-4 group-hover:text-primary-500 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.points.map((point, idx) => (
                    <li key={idx} className="flex items-start text-gray-700">
                      <span className="text-primary-500 mr-2 font-bold">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;