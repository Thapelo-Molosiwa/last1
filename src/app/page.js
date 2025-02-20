import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Research from "../components/Research";
import Technology from "../components/Technology";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Research />
      <Technology />
      <Footer />
    </div>
  );
}
