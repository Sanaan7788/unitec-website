import { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-navy-700 to-navy-500">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Contact Info */}
          <div className="text-white">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              To Serve is to Matter
            </h2>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Ready to discuss your project requirements? Our team is here to provide expert guidance and cost-effective solutions.
            </p>

            {/* Contact Items */}
            <div className="space-y-4 mb-8">
              {/* Phone Numbers */}
              <div className="flex items-center gap-4 group cursor-pointer transition-all duration-300 hover:translate-x-2 hover:scale-105">
                <FaPhone className="text-2xl text-primary-300 group-hover:rotate-12 group-hover:scale-125 transition-all duration-300" />
                <div className="flex items-center gap-2 text-lg">
                  <a href="tel:7139725153" className="hover:text-primary-300 transition-colors">713-972-5153</a>
                  <span className="text-primary-500 font-bold">|</span>
                  <a href="tel:8326054446" className="hover:text-primary-300 transition-colors">832-605-4446</a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4 group cursor-pointer transition-all duration-300 hover:translate-x-2 hover:scale-105">
                <FaEnvelope className="text-2xl text-primary-300 group-hover:rotate-12 group-hover:scale-125 transition-all duration-300" />
                <a href="mailto:deal@unitechusa.com" className="text-lg hover:text-primary-300 transition-colors">
                  deal@unitechusa.com
                </a>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4 group cursor-pointer transition-all duration-300 hover:translate-x-2 hover:scale-105">
                <FaMapMarkerAlt className="text-2xl text-primary-300 group-hover:rotate-12 group-hover:scale-125 transition-all duration-300" />
                <span className="text-lg">Houston, Texas, USA</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-full bg-white/10 hover:bg-primary-500 flex items-center justify-center transition-all duration-300 hover:-translate-y-1">
                <FaFacebook className="text-xl" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-white/10 hover:bg-primary-500 flex items-center justify-center transition-all duration-300 hover:-translate-y-1">
                <FaTwitter className="text-xl" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-white/10 hover:bg-primary-500 flex items-center justify-center transition-all duration-300 hover:-translate-y-1">
                <FaYoutube className="text-xl" />
              </a>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-white/95 backdrop-blur-sm p-8 rounded-lg shadow-2xl">
            <h3 className="text-3xl font-serif font-bold text-navy-500 mb-6 text-center">
              Send us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-navy-500 font-semibold mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-navy-500 font-semibold mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-navy-500 font-semibold mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-navy-500 font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all resize-none"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className={`w-full py-4 rounded font-bold text-lg uppercase tracking-wider transition-all duration-300 ${
                  isSubmitted
                    ? 'bg-green-500 text-white'
                    : 'bg-navy-500 text-white hover:bg-primary-500 hover:scale-105 hover:shadow-lg'
                }`}
              >
                {isSubmitted ? '✓ Message Sent!' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;