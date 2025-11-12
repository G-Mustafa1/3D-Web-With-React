import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Github } from "lucide-react";
import { motion } from "framer-motion";


const Footer = () => {

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <footer className="bg-[rgba(15,20,30,0.9)] backdrop-blur-md text-[var(--text)] border-t border-white/10 mt-16 shadow-[0_-2px_20px_rgba(0,0,0,0.3)] transition-all duration-300">
      <div className="container grid md:grid-cols-3 gap-10 py-12 px-4 md:px-0">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-[var(--accent)]">
            My3DStudio
          </h3>
          <p className="mt-3 text-sm text-[var(--muted)] max-w-md leading-relaxed">
            We craft immersive 3D web experiences using React, Three.js, and
            Tailwind CSS — bringing creativity to life through interactive
            design.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h4 className="text-lg text-white font-semibold mb-4">Navigate</h4>
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors duration-300 ${isActive
                      ? "text-[var(--accent)] underline underline-offset-4"
                      : "text-gray-300 hover:text-[var(--accent)]"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h4 className="text-lg text-white font-semibold mb-4">Follow Us</h4>
          <div className="flex gap-5 text-xl">
            <Link to="https://www.facebook.com/" className="text-gray-400 hover:text-[var(--accent)] transition-transform duration-300 hover:scale-110"><Facebook /></Link>
            <Link to="https://twitter.com/" className="text-gray-400 hover:text-[var(--accent)] transition-transform duration-300 hover:scale-110"><Twitter /></Link>
            <Link to="https://www.instagram.com/" className="text-gray-400 hover:text-[var(--accent)] transition-transform duration-300 hover:scale-110"><Instagram /></Link>
            <Link to="https://github.com/" className="text-gray-400 hover:text-[var(--accent)] transition-transform duration-300 hover:scale-110"><Github /></Link>
          </div>
        </motion.div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()}{" "}
        <span className="text-[var(--accent)] font-semibold">My3DStudio</span>.
        All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
