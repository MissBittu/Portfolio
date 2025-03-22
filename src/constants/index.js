import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  python,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "AI/ML Enthusiast",
    icon: creator,
  },
  {
    title: "Full Stack Web Developer",
    icon: web,
  },
  {
    title: "Competitive Programmer",
    icon: mobile,
  },
  {
    title: "Python Developer",
    icon: backend,
  },
  
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Django",
    icon: nodejs,
  },
  {
    name: "PostgreSQL",
    icon: mongodb,
  },
  {
    name: "C++",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  
];

const experiences = [
  
  {
    title: " E-Cell Nominee, IIITBH",
    company_name: "Entrepreneurship Cell, IIIT Bhagalpur",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Feb 2024 - Present",
    points: [
      "Led mentorship programs, boosting participation by 30% and launching 50+ ventures.",
      "Streamlined teamwork, cutting project completion time by 25%.",
      "Built a web platform linking 50+ industry experts with student entrepreneurs.",
      "Strengthened industry ties, driving IIIT Bhagalpur’s entrepreneurial growth.",
    ],
  },
  {
    title: "Digital Marketing and HR Intern",
    company_name: "Lernx",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Aug 2023 - Oct 2023",
    points: [
      "Automated analytics dashboards, improving campaign insights by 35% and optimizing marketing ROI.",
      "Increased brand visibility by 30% through strategic partnerships and targeted outreach.",
      "Enhanced user engagement by 25% using Google Analytics and SEO-driven strategies.",
      "Streamlined HR processes, improving talent acquisition and employee engagement.",
    ],
  },
  
  {
    title: "Competitive Programmer",
    company_name: "IIIT Bhagalpur",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Aug 2022 - Present",
    points: [
      "Solved 300+ DSA problems, strengthening problem-solving and algorithmic thinking.",
      "Achieved 2⭐ on CodeChef, consistently improving performance.",
      "Specialized in C++ with expertise in data structures, algorithms, and optimization.",
      "Participated in coding contests, enhancing speed, accuracy, and competitive skills.",
    ],
  },
  {
    title: " Social Media Lead",
    company_name: "Robotics and Automation Club, IIIT Bhagalpur",
    icon: shopify,
    iconBg: "#383E56",
    date: "Aug 2022 - Present",
    points: [
      "Created and designed 3D models for multiple robotics projects, enhancing visualization and innovation.",
      "Managed social media presence, showcasing robotics advancements and engaging a wider audience.",
      "Contributed as a Team Red member, driving research and development in robotics.",
      "Organized and led project demonstrations, increasing participation and interest in automation.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Advanced UAV System",
    description:
      "Implemented Kalman filtering to reduce positional drift by 35%, enhanced object tracking with YOLOv5 for 20% higher accuracy, and optimized aerodynamics to improve flight efficiency and stability.",
    tags: [
      {
        name: "Solidworks",
        color: "blue-text-gradient",
      },
      {
        name: "ML",
        color: "green-text-gradient",
      },
      {
        name: "Kalman Filter",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Student Progress Tracker (AI-Powered)",
    description:
      "Web app for tracking student performance, AI-driven report generation. It replicates Google Classroom with features like assignments, attendance, and teacher-student communication.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Siddharth-Nama/StudentProgressTracker_AI_powered",
  },
  {
    name: "Industrial Robotics Arm",
    description:
      "Optimized inverse kinematics, reducing computational costs by 30%. Enhanced motor synchronization for 25% faster response and refined trajectory planning, boosting accuracy by 40%.",
    tags: [
      {
        name: "Solidworks",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "ROS",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
