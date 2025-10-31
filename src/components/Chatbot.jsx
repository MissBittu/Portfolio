import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaRobot, FaTimes } from "react-icons/fa";

const initialMessages = [
  {
    sender: "bot",
    text: "🚀 Welcome to the Space of Intelligence! I’m your AI Co-Pilot, here to guide you through Miss Sakshi’s universe. Ask me about her skills, projects, journey, achievements, or what she’s exploring right now. 🌌",
  },
];

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const newUserMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, newUserMessage]);

    let response =
      "🌌 I couldn't parse that starlight. Try asking about *skills*, *projects*, *journey*, *achievements*, or *exploring*.";

    const lower = input.toLowerCase();

    if (lower.includes("skill")) {
      response =
        "🧠 My core stack:\n**AI / ML**: Python, Scikit-learn, TensorFlow, PyTorch, Pandas, NumPy\n**Web**: React, Tailwind CSS, FastAPI, Flask\n**Data**: SQL, Power BI\n**Cloud**: AWS, Docker, CI/CD\n**GenAI**: LLMs, LangChain, Agents";
    } else if (lower.includes("project")) {
      response =
        "🚀 Missions logged:\n• Energy Optimization Predictor – ML to reduce energy waste.\n• Customer Retention Predictor – 87% accuracy on churn detection.\n• Price Forecasting System – regression-based forecasting.\n• Python Learning Platform – React web app for learning Python.\n• AI Personal Assistant (in dev) – building with LangChain.";
    } else if (lower.includes("journey")) {
      response =
        "🪐 My journey so far:\n• 2022 — Learning Python & React basics.\n• 2023 — Built early projects & web apps.\n• 2024 — Deep dived into ML, TensorFlow, PyTorch.\n• 2025 — Exploring MLOps, AWS, LangChain, and GenAI.";
    } else if (lower.includes("achievement") || lower.includes("award")) {
      response =
        "🏆 Highlights:\n• Smart India Hackathon — Winner (2023)\n• Walmart CodeHers — Finalist (2025)\n• Coursera — Machine Learning Specialization (2024)";
    } else if (lower.includes("exploring") || lower.includes("learn") || lower.includes("learning")) {
      response =
        "🌱 Right now, Miss Sakshi is exploring:\n• LangChain & Agentic AI Systems\n• Docker & AWS for MLOps\n• CI/CD pipelines\n• Power BI & Data Storytelling";
    } else if (lower.includes("contact")) {
      response =
        "📡 You can reach Sakshi at **sakshi.2201251me@iiitbh.ac.in** or via the Contact section below.";
    }

    // typing effect before response
    setMessages((prev) => [...prev, { sender: "bot", text: "🤖 typing..." }]);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev.slice(0, -1),
        { sender: "bot", text: response },
      ]);
    }, 700);

    setInput("");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating glowing orb */}
     <motion.button
  onClick={() => setOpen((prev) => !prev)}
  animate={{
    y: [0, -5, 0],
  }}
  transition={{
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className={`relative w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 shadow-lg shadow-indigo-600/50 hover:shadow-indigo-400/70 transition-all ${
    open ? "rotate-45" : ""
  }`}
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}
>

        {/* glowing ring animation */}
        <span className="absolute inset-0 rounded-full bg-indigo-500/40 blur-xl animate-pulse"></span>
        {open ? (
          <FaTimes className="text-white text-2xl relative z-10" />
        ) : (
          <FaRobot className="text-white text-2xl relative z-10" />
        )}
      </motion.button>

{/* soft trailing glow below the orb */}
<div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-16 h-4 bg-indigo-500/40 blur-2xl rounded-full"></div>


      {/* Chatbox */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-20 right-0 w-80 bg-[#111325] border border-indigo-500/30 rounded-2xl p-4 shadow-2xl shadow-indigo-800/50 backdrop-blur-md"
          >
            <div className="h-72 overflow-y-auto pr-2 mb-3 scrollbar-thin scrollbar-thumb-indigo-500/40 scrollbar-track-transparent">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`mb-3 ${
                    msg.sender === "bot"
                      ? "text-indigo-300"
                      : "text-gray-200 text-right"
                  }`}
                  dangerouslySetInnerHTML={{
                    __html: msg.text.replace(/\n/g, "<br/>"),
                  }}
                />
              ))}
            </div>

            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask something..."
                className="flex-1 bg-transparent border border-white/20 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
              <button
                onClick={handleSend}
                className="px-3 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 shadow-lg shadow-indigo-500/30 rounded-lg text-sm font-semibold transition-all"
              >
                Send
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Chatbot;
