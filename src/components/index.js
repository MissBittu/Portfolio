import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  python,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  figma,
  threejs,
  tensorflow,
  mongodb,
  github,
} from "../assets";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Experience" },
  { id: "projects", title: "Projects" },
  { id: "contact", title: "Contact" },
];

// 🌟 SERVICES / SKILLS SECTION
const services = [
  { title: "Machine Learning Engineer", icon: backend },
  { title: "AI & Deep Learning Enthusiast", icon: creator },
  { title: "Full-Stack Developer (React + Python)", icon: web },
  { title: "Data Analytics & Visualization", icon: mobile },
];

// 💻 TECHNOLOGIES / TOOLS
const technologies = [
  { name: "Python", icon: python },
  { name: "JavaScript", icon: javascript },
  { name: "React JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "TensorFlow", icon: tensorflow },
  { name: "NumPy / Pandas", icon: backend },
  { name: "Matplotlib / Seaborn", icon: figma },
  { name: "Git / GitHub", icon: git },
  { name: "Node.js (Basics)", icon: nodejs },
  { name: "HTML / CSS", icon: html },
  { name: "MongoDB (Basics)", icon: mongodb },
  { name: "Three.js (Visuals)", icon: threejs },
];

// 💼 EXPERIENCE SECTION
const experiences = [
  {
    title: "Research Intern – UAV / Drone Systems",
    company_name: "Robotics & Automation Department, IIIT Bhagalpur",
    iconBg: "#383E56",
    date: "June 2024 – September 2024",
    points: [
      "Worked on integrating Machine Learning models into UAV control for autonomous flight analysis.",
      "Analyzed sensor data for object tracking and navigation optimization.",
      "Developed data preprocessing and visualization scripts in Python for drone telemetry datasets.",
      "Collaborated with professors on applied research in Robotics and AI integration.",
    ],
  },
  {
    title: "Technical Lead – Coding & Research Club",
    company_name: "IIIT Bhagalpur",
    iconBg: "#383E56",
    date: "2023 – Present",
    points: [
      "Led workshops and sessions on Python, Machine Learning, and project building.",
      "Guided juniors in implementing ML algorithms and understanding model workflows.",
      "Mentored students in projects involving AI, data visualization, and web integration.",
    ],
  },
];

// 🚀 PROJECTS SECTION
const projects = [
  {
    name: "Energy Cut-Off Predictor",
    description:
      "A machine learning model that predicts optimal energy cut-off levels to reduce waste by up to 21%. Built with Python, Pandas, and Scikit-learn, focusing on energy efficiency analytics.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "machinelearning", color: "green-text-gradient" },
      { name: "dataanalysis", color: "pink-text-gradient" },
    ],
    image: github, // replace with actual image path
    source_code_link: "https://github.com/MissBittu/Energy-Cutoff-Predictor",
  },
  {
    name: "Customer Retention Rate Predictor",
    description:
      "Developed a predictive model to estimate customer churn probability using Scikit-learn and logistic regression achieving 87% accuracy on a large dataset.",
    tags: [
      { name: "scikitlearn", color: "blue-text-gradient" },
      { name: "python", color: "green-text-gradient" },
      { name: "pandas", color: "pink-text-gradient" },
    ],
    image: github,
    source_code_link: "https://github.com/MissBittu/Customer-Retention",
  },
  {
    name: "Price Prediction System",
    description:
      "Built a regression-based ML model to forecast product pricing trends based on multiple market variables and historical data.",
    tags: [
      { name: "machinelearning", color: "blue-text-gradient" },
      { name: "numpy", color: "green-text-gradient" },
      { name: "matplotlib", color: "pink-text-gradient" },
    ],
    image: github,
    source_code_link: "https://github.com/MissBittu/Price-Predictor",
  },
  {
    name: "Python Learning Web Platform",
    description:
      "A web-based learning portal that helps beginners master Python through interactive modules and quizzes. Built using React and deployed via Vercel.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "webdev", color: "green-text-gradient" },
      { name: "education", color: "pink-text-gradient" },
    ],
    image: github,
    source_code_link: "https://github.com/MissBittu/Python-Learning-Platform",
  },
  {
    name: "Personal AI Assistant (Ongoing)",
    description:
      "Designing a personalized AI assistant using NLP and LLM-based architectures to help manage daily goals, tasks, and schedules with contextual awareness.",
    tags: [
      { name: "AI", color: "blue-text-gradient" },
      { name: "LLMs", color: "green-text-gradient" },
      { name: "python", color: "pink-text-gradient" },
    ],
    image: github,
    source_code_link: "https://github.com/MissBittu/Personal-AI-Assistant",
  },
];

// 🏆 ACHIEVEMENTS SECTION
const achievements = [
  {
    title: "Walmart CodeHers 2024 – National Finalist",
    details:
      "Reached the national finalist stage among top coders across India. Demonstrated skills in problem solving, ML, and software design.",
  },
  {
    title: "Smart India Hackathon Winner",
    details:
      "Built an innovative AI-based solution as part of a cross-functional team, delivering a real-world working prototype.",
  },
  {
    title: "C4GT Contributor – Open Source",
    details:
      "Contributed to government open-source projects, focusing on scalable and impactful public digital infrastructure solutions.",
  },
];

// 🧠 EXPORT
export { services, technologies, experiences, projects, achievements };
