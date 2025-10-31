// src/chatbot/knowledge.js
export const profile = {
  name: "Sakshi Meena",
  email: "sakshi.2201251me@iiitbh.ac.in",
  headline:
    "Building intelligent, data-driven applications with Python, ML and React.",
  location: "India",
  roles: ["ML Engineer", "Data Scientist", "AI / Data Analyst", "SDE (Python)"],
  journey: [
    { year: "2022", text: "Foundations: Python, HTML/CSS, basic React." },
    { year: "2023", text: "Web apps + deployments (Vercel/Render)." },
    {
      year: "2024",
      text:
        "Serious ML: scikit-learn, TensorFlow/PyTorch, EDA, model evaluation.",
    },
    {
      year: "2025",
      text:
        "Exploring MLOps, Docker, CI/CD, AWS, Power BI, GenAI (LLMs, LangChain, Agents).",
    },
  ],
  skills: {
    "AI / ML": [
      "Python",
      "Scikit-learn",
      "TensorFlow",
      "PyTorch",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "EDA",
      "Model Evaluation",
    ],
    Web: ["React", "Tailwind CSS", "FastAPI (basic)", "Flask (basic)"],
    Data: ["SQL (learning)", "Power BI (learning)"],
    Cloud_DevOps: ["Docker (learning)", "AWS (learning)", "CI/CD (learning)"],
    GenAI: ["LLMs (learning)", "LangChain (learning)", "Agentic workflows"],
    Tools: ["Git & GitHub", "VS Code", "Jupyter / Colab", "Streamlit"],
  },
  achievements: [
    "Smart India Hackathon — Winner",
    "Walmart CodeHers — Finalist (2025)",
    "Coursera — Machine Learning Specialization (Andrew Ng)",
  ],
};

export const projects = [
  {
    name: "Energy Cut-off Predictor",
    desc:
      "Predicts optimal energy cut-off to reduce waste (~21%). Python, Pandas, scikit-learn.",
    tags: ["Python", "ML", "Pandas"],
    link: "https://github.com/MissBittu",
  },
  {
    name: "Customer Retention Predictor (87%)",
    desc:
      "Churn probability model with EDA + scikit-learn. Clear metrics and evaluation.",
    tags: ["Scikit-learn", "EDA", "Classification"],
    link: "https://github.com/MissBittu",
  },
  {
    name: "Price Prediction System",
    desc: "Regression pipeline to forecast prices from historical data.",
    tags: ["Regression", "NumPy", "Matplotlib"],
    link: "https://github.com/MissBittu",
  },
  {
    name: "Python Learning Platform",
    desc: "React-based learning portal; deployable on Vercel.",
    tags: ["React", "Tailwind", "Vercel"],
    link: "https://github.com/MissBittu",
  },
  {
    name: "AI Personal Assistant (in development)",
    desc:
      "Agentic LLM prototype for tasks, reminders, and recommendations. Exploring LangChain.",
    tags: ["LLMs", "LangChain", "Agents"],
    link: "https://github.com/MissBittu",
  },
];

// short, resume-style highlights (shown by the chatbot)
export const experiences = [
  {
    title: "E-Cell Nominee",
    company: "IIIT Bhagalpur",
    date: "Feb 2024 – Present",
    bullets: [
      "Led initiative participation & workshops; improved community engagement.",
      "Coordinated events and maintained operations for growth.",
    ],
  },
  {
    title: "Digital Marketing & HR Intern",
    company: "Intern",
    date: "2023 – 2024",
    bullets: [
      "Automated data dashboards; improved campaign insights.",
      "Supported outreach and analytics using Google Sheets & basic scripts.",
    ],
  },
  {
    title: "Social Media Lead",
    company: "Robotics & Automation Club, IIIT Bhagalpur",
    date: "Aug 2022 – Present",
    bullets: [
      "Planned content & campaigns; grew engagement and reach.",
      "Collaborated with team for regular updates and events.",
    ],
  },
  {
    title: "Competitive Programmer",
    company: "Individual",
    date: "Aug 2022 – Present",
    bullets: [
      "Practicing DSA on LeetCode; improving problem-solving speed.",
    ],
  },
];

export const faqs = [
  {
    q: "How can I contact Sakshi?",
    a: "You can email me at sakshi.2201251me@iiitbh.ac.in or use the Contact section.",
  },
  {
    q: "What roles is Sakshi targeting?",
    a: "ML Engineer, Data Scientist, AI/Data Analyst, and SDE (Python/Full-stack).",
  },
  {
    q: "What is Sakshi currently learning?",
    a: "MLOps (Docker, CI/CD), AWS, Power BI, and GenAI with LangChain and agentic workflows.",
  },
];
