// src/chatbot/nlu.js
import { profile, projects, faqs } from "./knowledge";

const text = (s = "") => s.toLowerCase().trim();

export function matchIntent(user) {
  const u = text(user);

  // quick routes
  if (/(hi|hello|hey)\b/.test(u)) return { intent: "greet" };
  if (u.includes("contact") || u.includes("email")) return { intent: "contact" };
  if (u.includes("skill") || u.includes("stack") || u.includes("tech"))
    return { intent: "skills" };
  if (u.includes("project")) return { intent: "projects" };
  if (u.includes("journey") || u.includes("timeline") || u.includes("about"))
    return { intent: "journey" };
  if (u.includes("role") || u.includes("job")) return { intent: "roles" };
  if (u.includes("resume") || u.includes("cv")) return { intent: "resume" };
  if (u.includes("achievement") || u.includes("award"))
    return { intent: "achievements" };

  // faq fallback
  for (const f of faqs) {
    if (text(f.q).includes(u) || u.includes(text(f.q))) {
      return { intent: "faq", data: f };
    }
  }

  return { intent: "unknown" };
}

export function draftReply(intent) {
  switch (intent.intent) {
    case "greet":
      return `Greetings, traveler ✨ You’ve entered Sakshi’s AI Galaxy. Ask about skills, projects, journey, or how to reach me.`;
    case "contact":
      return `📡 Send a signal at **${profile.email}** or use the Contact panel below.`;
    case "skills": {
      const lines = Object.entries(profile.skills)
        .map(([k, arr]) => `**${k.replace("_", " & ")}**: ${arr.join(", ")}`)
        .join("\n");
      return `🧠 My core stack:\n${lines}\n\nCurrently exploring: AWS, Docker, CI/CD, Power BI, LangChain.`;
    }
    case "projects": {
      const items = projects
        .slice(0, 5)
        .map(
          (p) =>
            `• **${p.name}** — ${p.desc}  \n   _${p.tags.join(", ")}_  \n   ${p.link}`
        )
        .join("\n\n");
      return `🚀 Missions logged:\n\n${items}`;
    }
    case "journey": {
      const j = profile.journey
        .map((o) => `• **${o.year}** — ${o.text}`)
        .join("\n");
      return `🪐 My path through the Learning Nebula:\n${j}`;
    }
    case "roles":
      return `🎯 Target roles: ${profile.roles.join(", ")}.\nI build end-to-end ML apps (model → API → web UI → deploy).`;
    case "resume":
      return `📄 I can share my resume on request. Meanwhile, explore my projects and experience sections.`;
    case "achievements":
      return `🏆 Stars of recognition:\n• ${profile.achievements.join("\n• ")}`;
    case "faq":
      return intent.data.a;
    default:
      return null; // let AI fallback try, or final fallback
  }
}
