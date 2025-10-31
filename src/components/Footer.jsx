import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="w-full py-8 border-t border-white/10 bg-gradient-to-b from-transparent via-[#0a0a12]/80 to-[#0a0a12] text-center"
    >
      <div className="flex justify-center gap-8 mb-4">
        <a
          href="https://github.com/MissBittu"
          target="_blank"
          rel="noreferrer"
          className="text-gray-400 hover:text-indigo-400 text-2xl"
        ><FaGithub /></a>
        <a
          href="https://linkedin.com/in/sakshi-meena"
          target="_blank"
          rel="noreferrer"
          className="text-gray-400 hover:text-indigo-400 text-2xl"
        ><FaLinkedin /></a>
        <a
          href="mailto:sakshi.2201251me@iiitbh.ac.in"
          className="text-gray-400 hover:text-indigo-400 text-2xl"
        ><FaEnvelope /></a>
      </div>
      <p className="text-gray-500 text-sm">
        © {new Date().getFullYear()} <span className="text-white font-semibold">Sakshi Meena</span>
      </p>
    </motion.footer>
  );
};

export default Footer;
