import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { FaCode, FaChartLine } from "react-icons/fa";

const DSAProgress = () => {
  return (
    <section
      id="dsa-progress"
      className="py-20 bg-[#0b0e1a] text-white border-t border-white/10"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className={styles.sectionSubText}>Consistency in Practice</p>
          <h2 className={styles.sectionHeadText}>Coding Journey</h2>
          <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
            I believe strong foundations in algorithms and data structures build the core of every great engineer.
            Here’s my current progress in problem-solving and coding practice.
          </p>
        </motion.div>

        {/* Stats Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto bg-gradient-to-br from-[#15172b] to-[#1f223a] p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
        >
          <div className="flex flex-col items-center text-center">
            <FaCode className="text-indigo-400 text-5xl mb-4" />
            <h3 className="text-2xl font-bold mb-2">
              167+ Problems Solved on <span className="text-indigo-400">LeetCode</span>
            </h3>
            <p className="text-gray-300 text-[15px] leading-relaxed max-w-md">
              Focus areas: Arrays, Recursion, Dynamic Programming, Graphs, and Sliding Window.
              Regularly practicing 1–2 problems daily to strengthen my fundamentals and pattern recognition.
            </p>
            <a
              href="https://leetcode.com/"  // 🔗 replace with your actual profile link if you want
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 px-6 py-3 bg-indigo-600 rounded-xl font-semibold hover:bg-indigo-700 transition"
            >
              View LeetCode Profile
            </a>
          </div>
        </motion.div>

        {/* Chart or Visual Progress */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 flex justify-center"
        >
          <div className="flex items-center gap-4 bg-[#111325] px-6 py-4 rounded-2xl border border-white/10">
            <FaChartLine className="text-green-400 text-3xl" />
            <div>
              <h4 className="text-lg font-semibold text-white">Daily Streak: 7 Days 🔥</h4>
              <p className="text-gray-400 text-sm">
                Steady problem-solving habit with continuous growth each week.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DSAProgress;
