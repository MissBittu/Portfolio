import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const About = () => {
  return (
    <section id="about" className="max-w-5xl mx-auto px-6 py-20">
      <motion.div variants={textVariant()}>
        <p className="text-gray-400 uppercase tracking-widest text-sm">
          Introduction
        </p>
        <h2 className="text-4xl font-extrabold mt-2">About Me</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-6 text-gray-300 leading-relaxed text-[17px]"
      >
        I’m a <span className="text-indigo-400 font-semibold">final-year Robotics & Automation</span> 
        (Mechatronics) student passionate about creating intelligent systems that combine 
        <span className="text-white font-semibold"> machine learning, automation, and modern web technologies</span>.
        <br /><br />
        I specialize in turning <span className="text-indigo-300">data-driven models</span> into usable 
        web applications — building end-to-end solutions from exploration to deployment.
        <br /><br />
        My current focus lies in <span className="text-indigo-400">AI engineering</span>, 
        <span className="text-indigo-400"> applied analytics</span>, and developing 
        <span className="text-indigo-400"> personalized AI systems</span> that augment human intelligence.
        <br /><br />
        Beyond code, I’m fascinated by <span className="text-indigo-300">how humans interact with intelligent tools</span>, 
        and I’m exploring ways to make AI more intuitive and personal.
      </motion.p>
    </section>
  );
};

export default SectionWrapper(About, "about");
