import React from "react";

const projects = [
  {
    name: "Advance E-Commerce Predictor",
    desc: "Developed a multimodal deep-learning model that predicts product prices by fusing text and image features. Implemented a custom SMAPE loss, 5-fold cross-validation ensemble, and Test-Time Augmentation for robust generalization.",
    link: "https://github.com/MissBittu/Advance_Ecommerce_Predictor",
    tags: [
      "Python",
      "PyTorch",
      "ResNet50",
      "MiniLM",
      "Sentence-Transformers",
      "EDA",
      "Feature Engineering",
      "Cross-Validation",
      "TTA",
      "SMAPE Loss",
    ],
  },
  {
    name: "Customer Retention Predictor (87%)",
    desc: "Designed a churn-prediction pipeline analyzing customer behavior through feature engineering and EDA. Achieved 87% accuracy using Logistic Regression with scikit-learn.",
    link: "https://github.com/MissBittu",
    tags: ["Python", "Scikit-learn", "Pandas", "Logistic Regression", "EDA"],
  },
  {
    name: "Python Learning Web Platform",
    desc: "Built an interactive learning portal that helps beginners master Python through structured lessons and quizzes. Front-end in React + Tailwind CSS, deployed via Vercel.",
    link: "https://github.com/MissBittu",
    tags: ["React", "Tailwind", "Vercel", "Frontend", "Education Tech"],
  },
  {
    name: "Personal AI Assistant (In Progress)",
    desc: "Currently building an AI-powered personal assistant integrating LLMs, LangChain, and contextual memory for daily-task automation and intelligent reminders.",
    link: "https://github.com/MissBittu",
    tags: ["LLMs", "LangChain", "AI Agents", "GenAI", "Python"],
  },
  {
    name: "Modular Drone Design & Development",
    desc: "Engineered a drone telemetry and analytics pipeline using Python and Pandas to process geospatial flight data. Applied CFD/FEA simulations in ANSYS for airframe validation and deployed scalable analytics via Docker and cloud platforms.",
    link: "https://github.com/MissBittu", // update when repo is public
    tags: [
      "SolidWorks",
      "ANSYS",
      "Python",
      "Pandas",
      "Docker",
      "Cloud",
      "Data Analytics",
      "Simulation",
    ],
  },
];

const Works = () => {
  return (
    <section id="projects" className="px-6 py-20 max-w-6xl mx-auto">
      <p className="uppercase tracking-widest text-sm text-gray-400">My Work</p>
      <h2 className="text-4xl md:text-5xl font-extrabold mt-2">Projects</h2>

      {/* 🌌 Current Focus Banner */}
      <div className="mt-4 bg-white/5 p-4 rounded-xl border border-indigo-500/20">
        <p className="text-indigo-300 text-sm">
          🧠 <strong>Currently Exploring:</strong> LangChain, Docker, AWS, and Agentic AI Systems
        </p>
      </div>

      {/* Projects Grid */}
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <a
            key={p.name}
            href={p.link}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/[.08] transition block"
          >
            <h3 className="font-semibold text-lg text-indigo-300">{p.name}</h3>
            <p className="text-sm text-gray-300 mt-2">{p.desc}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-1 rounded bg-white/10 text-indigo-400"
                >
                  #{t}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Works;
