import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";

const achievements = [
  {
    title: "🏆 Smart India Hackathon — Winner",
    year: "2023",
    description:
      "Developed and deployed an innovative project selected among national finalists, solving real-world challenges using scalable solutions.",
    gradient: "from-amber-400 to-orange-600",
  },
  {
    title: "💻 Walmart CodeHers — Finalist (2025)",
    year: "2025",
    description:
      "Reached finalist stage in one of India’s largest coding competitions for women, showcasing problem-solving and software engineering skills.",
    gradient: "from-pink-500 to-fuchsia-500",
  },
  {
    title: "📜 Coursera — Machine Learning Specialization",
    year: "2024",
    description:
      "Completed Andrew Ng’s Machine Learning Specialization, gaining hands-on experience with supervised learning, model evaluation, and gradient descent.",
    gradient: "from-indigo-500 to-purple-500",
  },
];

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { delay, duration: 0.6 } },
});

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-[#0b0e1a] text-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeIn(0.1)}
          className="text-center mb-12"
        >
          <p className={styles.sectionSubText}>Recognition & Milestones</p>
          <h2 className={styles.sectionHeadText}>Achievements & Certifications</h2>
          <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
            Highlights from my journey — hackathon wins, competitive programming,
            and key technical certifications that strengthened my AI and software skills.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeIn(0.15 + i * 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className={`rounded-2xl p-[1px] bg-gradient-to-r ${item.gradient} shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-transform`}
            >
              <div className="bg-[#111325] rounded-2xl p-6 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-indigo-300 to-purple-400 bg-clip-text text-transparent">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-3">{item.year}</p>
                  <p className="text-gray-300 text-[15px] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
