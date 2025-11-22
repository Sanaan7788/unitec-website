const Testimonials = () => {
  const testimonials = [
    {
      quote: "During our cooperation all over the years we have found Uni-Tec to be diligent & reliable, every request has been handled with prompt service, true concern and attention to detail.",
      author: "Savas Papadis",
      title: "Red Sea Marine Division | Finance & Marine Operations Supervisor"
    },
    {
      quote: "Uni-Tec has done a fantastic job representing the interests of FME & providing exceptional value to our customers for the past 14 years. Most recently, Uni-Tec has led all Channel Partners in the commercial orders of ALCO parts.",
      author: "Scott Davies",
      title: "Fairbanks Morse Engine | Segment Manager; Navies and Global Marine"
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">
            Client Feedback
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy-500 mt-2">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-lg border-l-4 border-primary-500 group hover:shadow-xl hover:bg-white transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Large Quote Mark */}
              <div className="absolute top-4 right-6 text-8xl text-primary-500/10 font-serif leading-none group-hover:text-primary-500/20 group-hover:scale-110 transition-all duration-300">
                "
              </div>
              
              <div className="relative z-10">
                <p className="text-lg text-gray-700 italic mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-semibold text-navy-500">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;