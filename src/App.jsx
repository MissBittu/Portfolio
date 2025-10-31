import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
import DSAProgress from "./components/DSAProgress";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";
import CosmicBackground from "./components/CosmicBackground"; // 🌌 cosmic layer

// import StarsCanvas from "./components/canvas/Stars";

const App = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 800);
    return () => clearTimeout(t);
  }, []);

  if (!show) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0a0a12] text-white">
        <div className="text-center animate-pulse">
          <h1 className="text-2xl md:text-3xl font-bold">
            MISS<span className="text-indigo-400">SAKSHI</span>
          </h1>
          <p className="mt-2 text-gray-400 text-sm">
            loading … ⚡
          </p>
        </div>
      </div>
    );
  }

  // ✅ Main layout starts here
  return (
    <div className="relative z-0 bg-[#0b0e1a] text-white overflow-hidden">
      {/* 🌌 Cosmic Background Layer */}
      <CosmicBackground />

      {/* NAV + HERO */}
      <div className="bg-gradient-to-br from-[#0b0e1a] via-[#0f1022] to-[#171833]">
        <Navbar />
        <Hero />
      </div>

      {/* CONTENT SECTIONS */}
      <About />
      <Skills />
      <Experience />
      <Achievements />
      <DSAProgress />
      <Works />
      <Contact />

      {/* FOOTER + CHATBOT */}
      <Footer />
      <Chatbot />
    </div>
  );
};

export default App;
