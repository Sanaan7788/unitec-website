import { useState, useEffect, useRef } from 'react';

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const stats = [
    { number: '20+', label: 'Years of Excellence' },
    { number: '100+', label: 'U.S. Companies Participated' },
    { number: 'Global', label: 'Supplier Network' },
    { number: '24/7', label: 'Technical Support' },
  ];

  return (
    <section ref={sectionRef} className="bg-white py-16 px-4 md:px-8 relative -mt-10 z-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center p-8 rounded-lg transition-all duration-300 cursor-pointer hover:bg-gray-50 hover:-translate-y-2 ${
                isVisible ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl font-serif font-bold text-navy-500 mb-2 transition-all duration-300 hover:text-primary-500 hover:scale-110">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600 uppercase tracking-wider font-semibold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;