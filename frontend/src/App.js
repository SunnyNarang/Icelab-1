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
import HexagonMark from "@/components/HexagonMark";

const MARQUEE_WORDS = [
  "Invisible Luxury",
  "Pure Ice",
  "Premium Quality",
  "Consistently Clear",
  "Artisan Crafted",
  "From Gwalior to the World",
];

const Marquee = () => (
  <div
    className="border-y border-ice-border overflow-hidden py-7 bg-[#0E1726] relative"
    data-testid="marquee"
  >
    <div className="flex gap-12 whitespace-nowrap marquee">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="flex gap-12 items-center shrink-0">
          {MARQUEE_WORDS.map((t, j) => (
            <span key={`${i}-${j}`} className="flex items-center gap-12 shrink-0">
              <span
                className={`font-heading text-2xl md:text-4xl lg:text-[44px] uppercase tracking-tight font-extralight ${
                  j === 0 ? "italic text-ice-primary" : "text-white/85"
                }`}
              >
                {t}
              </span>
              <HexagonMark
                size={26}
                stroke="#8BD7FF"
                strokeWidth={1}
                opacity={0.7}
                className="shrink-0"
              />
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
