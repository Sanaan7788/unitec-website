import Header from './components/header';
import Hero from './components/hero';
import Stats from './components/stats';
import Products from './components/products';
import Services from './components/services';
import Partnership from './components/partnership';
import Brands from './components/brands';
import ProductList from './components/productlist';
import Testimonials from './components/testimonials';
import Contact from './components/contact';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Stats />
      <Products />
      <Services />
      <Partnership />
      <div className="bg-navy-700 text-white section-padding text-center">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            International Trade Leadership
          </h2>
          <p className="text-xl text-gray-200 leading-relaxed">
            Uni-Tec Trade Inc. was one of 100 U.S.A Companies that participated in 'Trade Winds—Africa', a USA Government (U.S Department of Commerce) lead mission & business forum to Africa.
          </p>
        </div>
      </div>
      <ProductList />
      <Brands />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;