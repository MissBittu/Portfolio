import React from "react";
import { motion } from "framer-motion";

const topics = [
  "LangChain",
  "Docker",
  "AWS",
  "CI/CD",
  "Agentic AI Systems",
  "Power BI",
];

const Exploring = () => {
  return (
    <section
      id="exploring"
      className="px-6 py-20 md:py-28 max-w-5xl mx-auto text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p className="uppercase tracking-[0.2em] text-gray-400 text-sm">
          🌱 What I’m Exploring Now
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
          Always Learning. Always Building.
        </h2>

        <p className="mt-4 text-gray-300 text-base max-w-2xl mx-auto leading-relaxed">
          I love staying curious — diving into tools and systems that make
          intelligent applications smarter, faster, and more useful.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {topics.map((item) => (
            <span
              key={item}
              className="px-4 py-2 text-sm rounded-full bg-white/10 text-indigo-300 border border-white/10 hover:bg-indigo-600/20 transition"
            >
              {item}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Exploring;
