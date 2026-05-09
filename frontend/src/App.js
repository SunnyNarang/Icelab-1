import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Process from "@/components/Process";
import Values from "@/components/Values";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Landing = () => (
  <main className="bg-[#060A12] text-white" data-testid="icelab-landing">
    <Navbar />
    <Hero />
    <About />
    <Products />
    <Process />
    <Values />
    <Testimonials />
    <Contact />
    <Footer />
  </main>
);

function App() {
  return (
    <div className="App font-body">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
