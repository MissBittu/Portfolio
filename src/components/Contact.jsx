import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="px-6 py-16 md:py-24 max-w-4xl mx-auto">
      <p className="uppercase tracking-widest text-sm text-gray-400">Get in touch</p>
      <h2 className="text-3xl md:text-4xl font-extrabold mt-1">Contact</h2>

      <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
        <form
          className="grid gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            // simple fallback: open email client
            const name = e.currentTarget.name.value;
            const email = e.currentTarget.email.value;
            const msg = e.currentTarget.message.value;
            window.location.href = `mailto:Misssakshi.work@gmail.com?subject=Portfolio%20Contact%20from%20${encodeURIComponent(
              name || "Visitor"
            )}&body=${encodeURIComponent(msg)}%0A%0AReply-to:%20${encodeURIComponent(
              email
            )}`;
          }}
        >
          <label className="grid gap-1">
            <span className="text-sm text-gray-300">Your name</span>
            <input
              name="name"
              className="bg-black/40 border border-white/10 rounded-lg px-4 py-3 outline-none"
              placeholder="Your name"
            />
          </label>

          <label className="grid gap-1">
            <span className="text-sm text-gray-300">Your email</span>
            <input
              type="email"
              name="email"
              required
              className="bg-black/40 border border-white/10 rounded-lg px-4 py-3 outline-none"
              placeholder="you@example.com"
            />
          </label>

          <label className="grid gap-1">
            <span className="text-sm text-gray-300">Message</span>
            <textarea
              name="message"
              rows={5}
              className="bg-black/40 border border-white/10 rounded-lg px-4 py-3 outline-none"
              placeholder="How can I help?"
            />
          </label>

          <button
            type="submit"
            className="mt-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 font-semibold transition"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
