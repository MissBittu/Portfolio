import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const CosmicBackground = () => {
  const particlesInit = useCallback(async (main) => {
    await loadFull(main);
  }, []);

  return (
    <div className="absolute inset-0 -z-10">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: "transparent" },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              onClick: { enable: true, mode: "push" },
              resize: true,
            },
            modes: {
              repulse: { distance: 100, duration: 0.5 },
              push: { quantity: 2 },
            },
          },
          particles: {
            color: { value: ["#ffffff", "#8b5cf6", "#6366f1", "#a78bfa"] },
            links: {
              color: "#6366f1",
              distance: 130,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              random: true,
              speed: 0.5,
              straight: false,
              parallax: { enable: true, smooth: 15, force: 70 }, // 👈 Adds parallax
            },
            number: {
              density: { enable: true, area: 900 },
              value: 75,
            },
            opacity: { value: 0.6 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 2 } },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default CosmicBackground;
