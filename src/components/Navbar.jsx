import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const Item = ({ to, children }) => (
    <ScrollLink
      to={to}
      smooth={true}
      duration={600}
      offset={-70}
      className="cursor-pointer hover:text-white/90 transition"
      onClick={() => setOpen(false)}
    >
      {children}
    </ScrollLink>
  );

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition backdrop-blur-md ${
        scrolled ? "bg-black/40 border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {logo ? (
            <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          ) : null}
          <span className="font-semibold tracking-wide">
            MISS <span className="text-indigo-400">SAKSHI</span>
          </span>
        </div>

        <ul className="hidden md:flex items-center gap-10 text-gray-300">
          <li><Item to="about">About</Item></li>
          <li><Item to="work">Experience</Item></li>
          <li><Item to="projects">Projects</Item></li>
          <li><Item to="contact">Contact</Item></li>
        </ul>

        <button className="md:hidden" onClick={() => setOpen((v) => !v)}>
          <img
            src={open ? close : menu}
            alt="menu"
            className="w-7 h-7 invert"
          />
        </button>
      </div>

      {/* mobile */}
      {open && (
        <div className="md:hidden px-6 pb-6">
          <div className="rounded-2xl bg-black/60 border border-white/10 p-4">
            <ul className="flex flex-col gap-4 text-gray-300">
              <li><Item to="about">About</Item></li>
              <li><Item to="work">Experience</Item></li>
              <li><Item to="projects">Projects</Item></li>
              <li><Item to="contact">Contact</Item></li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
