import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Loader = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Automatically hide loader after 2.5 seconds
    const timer = setTimeout(() => setVisible(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8 } }}
          className="fixed inset-0 flex flex-col justify-center items-center bg-gradient-to-br from-[#0a0a0a] via-[#111122] to-[#1a1a2e] z-[9999]"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-6xl font-bold text-white"
          >
            <span className="text-indigo-400">Sakshi</span> Meena
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="mt-4 text-gray-400 tracking-widest uppercase"
          >
            Loading your experience ⚡
          </motion.p>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "6rem" }}
            transition={{ delay: 0.8, duration: 1.5, ease: "easeInOut" }}
            className="h-1 bg-indigo-500 mt-6 rounded-full shadow-lg shadow-indigo-500/30"
          ></motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
