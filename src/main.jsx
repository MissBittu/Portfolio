import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

// ✨ Scroll animation library
import AOS from "aos";
import "aos/dist/aos.css";

// Initialize AOS animations globally
AOS.init({
  duration: 1000,
  easing: "ease-in-out",
  once: true,
  offset: 120,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
