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

const Marquee = () => (
  <div
    className="border-y border-ice-border overflow-hidden py-6 bg-[#0E1726]"
    data-testid="marquee"
  >
    <div className="flex gap-16 whitespace-nowrap marquee">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="flex gap-16 items-center shrink-0">
          {[
            "Pure Ice",
            "·",
            "Premium Quality",
            "·",
            "Consistently Clear",
            "·",
            "Artisan Crafted",
            "·",
          ].map((t, j) => (
            <span
              key={`${i}-${j}`}
              className={`font-heading text-2xl md:text-4xl lg:text-5xl uppercase tracking-tight font-light ${
                t === "·" ? "text-ice-primary" : "text-white/85"
              }`}
            >
              {t}
            </span>
          ))}
        </div>
      ))}
    </div>
  </div>
);

const Landing = () => (
  <main className="bg-ice-bg text-white" data-testid="icelab-landing">
    <Navbar />
    <Hero />
    <About />
    <Marquee />
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
