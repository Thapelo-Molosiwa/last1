import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Products from "../components/Products";
import Footer from "../components/Footer";
import Services from './../components/Services';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <br/>
      <About />
      <br/>
      <Services />
      <br/>
      <Products />
      <br/>
      <Footer />
    </div>
  );
}
