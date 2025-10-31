import React from "react";

const items = [
  {
    title: "Research Intern – UAV / Drone Systems",
    org: "IIIT Bhagalpur (Robotics & Automation)",
    date: "Jun 2024 – Sep 2024",
    bullets: [
      "Integrated ML analysis into UAV control and telemetry workflows.",
      "Wrote Python data-processing scripts; visualized flight datasets.",
      "Collaborated on applied robotics + AI research."
    ],
  },
  
];

const Experience = () => {
  return (
    <section id="work" className="px-6 py-16 md:py-24 max-w-6xl mx-auto">
      <p className="uppercase tracking-widest text-sm text-gray-400">What I’ve done</p>
      <h2 className="text-3xl md:text-4xl font-extrabold mt-1">Experience</h2>

      <div className="mt-10 space-y-6">
        {items.map((exp) => (
          <div
            key={exp.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <div className="flex items-center justify-between gap-4">
              <h3 className="font-semibold text-lg">{exp.title}</h3>
              <span className="text-sm text-gray-400">{exp.date}</span>
            </div>
            <p className="text-indigo-300 text-sm mt-1">{exp.org}</p>
            <ul className="mt-3 list-disc ml-5 space-y-2 text-gray-200 text-sm">
              {exp.bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
