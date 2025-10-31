import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden"
    >
      {/* 🎥 Cinematic Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/sakshi-bg.jpg" // 📸 place your image in public/sakshi-bg.jpg
          alt="Miss Sakshi"
          className="object-cover w-full h-full opacity-25 blur-[2px] scale-105 animate-slow-pan"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0e1a]/70 via-[#0b0e1a]/50 to-[#0b0e1a]/90" />
      </div>

      {/* 🌌 Floating Particle Glow Layers (existing) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(99,102,241,0.1),transparent_60%)] animate-pulse"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,rgba(168,85,247,0.1),transparent_60%)] animate-pulse"></div>
      </div>

      {/* Main Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-3xl"
      >
        <p className="uppercase tracking-[0.25em] text-gray-400 mb-3">
          Welcome to my universe 👋
        </p>

        {/* ✨ Animated Gradient Name */}
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-white mb-2">
          Hi, I’m{" "}
          <motion.span
            className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{ backgroundSize: "200% 200%" }}
          >
            Miss Sakshi
          </motion.span>
        </h1>

        {/* 💬 Typewriter Text */}
        <div className="text-lg md:text-2xl text-gray-300 font-light mt-4 h-[60px]">
          <Typewriter
            options={{
              strings: [
                "Building intelligent systems that learn, adapt, and inspire.",
                "Exploring AI, ML, and Data-Driven Development.",
                "Turning ideas into intelligent experiences.",
              ],
              autoStart: true,
              loop: true,
              delay: 40,
              deleteSpeed: 25,
            }}
          />
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-10 flex justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 font-semibold transition shadow-lg shadow-indigo-600/40"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-xl border border-white/20 hover:bg-white/10 font-semibold transition"
          >
            Get in Touch
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-indigo-400 flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-indigo-400 mb-1"
            />
          </div>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
