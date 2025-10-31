import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const skills = [
  {
    category: "Core Expertise",
    items: [
      "Python",
      "Machine Learning",
      "Data Analysis",
      "Full-Stack Development (React + Tailwind)",
    ],
  },
  {
    category: "AI / ML",
    items: [
      "Scikit-learn",
      "TensorFlow",
      "PyTorch",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "EDA & Feature Engineering",
      "Model Evaluation",
    ],
  },
  {
    category: "Web / App Development",
    items: [
      "React",
      "Tailwind CSS",
      "FastAPI (basic)",
      "Flask (basic)",
      "REST APIs",
      "Vercel / Render",
    ],
  },
  {
    category: "Cloud & DevOps Tools",
    items: [
      "Git & GitHub",
      "VS Code",
      "Docker (learning)",
      "AWS (learning)",
      "CI/CD (learning)",
    ],
  },
  {
    category: "GenAI & Emerging Tech",
    items: [
      "LLMs (learning)",
      "LangChain",
      "Agentic Workflows",
      "Streamlit",
      "AI Assistants",
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-20">
      <motion.div variants={textVariant()}>
        <p className="text-gray-400 uppercase tracking-widest text-sm">
          Tech Arsenal
        </p>
        <h2 className="text-4xl font-extrabold mt-2">Skills & Tools</h2>
        <p className="mt-3 text-gray-400 text-[16px] max-w-2xl">
          A concise overview of my technical ecosystem — from 
          <span className="text-indigo-400"> machine learning frameworks </span> 
          to <span className="text-indigo-400"> full-stack development</span> 
          and <span className="text-indigo-400"> cloud technologies</span>.
        </p>
      </motion.div>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.category}
            variants={fadeIn("up", "spring", index * 0.3, 0.75)}
            className="border border-white/10 rounded-2xl p-6 bg-white/5 hover:bg-white/[.07] transition"
          >
            <h3 className="text-lg font-semibold text-indigo-300 mb-4">
              {skill.category}
            </h3>
            <ul className="text-gray-300 space-y-2 text-sm">
              {skill.items.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Skills, "skills");
