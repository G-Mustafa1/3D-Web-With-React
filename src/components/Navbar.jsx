import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";

function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed w-full top-0 z-50 bg-[rgba(15,20,30,0.75)] backdrop-blur-lg border-b border-white/10 shadow-[0_2px_20px_rgba(0,0,0,0.3)] transition-all duration-300">
      <div className="container flex items-center justify-between py-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md bg-[var(--primary)]/20 flex items-center justify-center text-[var(--accent)] font-bold shadow-inner shadow-[rgba(0,191,166,0.2)]">
            3D
          </div>
          <div>
            <div className="text-[var(--text)] font-semibold text-lg">
              My3DStudio
            </div>
            <div className="text-[var(--muted)] text-xs -mt-1">
              Interactive experiences
            </div>
          </div>
        </motion.div>

        <motion.nav
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden md:flex items-center gap-8">
          {links.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                isActive
                  ? "text-[var(--accent)] font-semibold transition-all"
                  : "text-[var(--text)] hover:text-[var(--accent)] transition-all"
              }
            >
              {item.label}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            className="ml-4 px-4 py-2 rounded-lg text-sm font-semibold bg-[var(--primary)] hover:bg-[var(--accent)] transition-colors text-white shadow-md hover:shadow-[0_0_20px_rgba(0,191,166,0.3)]"
          >
            Contact
          </NavLink>
        </motion.nav>

        <div className="md:hidden">
          <button
            onClick={() => setOpen((s) => !s)}
            className="text-[var(--text)] focus:outline-none"
          >
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden bg-[rgba(15,20,30,0.95)] backdrop-blur-md border-t border-white/10 shadow-inner overflow-hidden transition-all duration-500 ease-in-out ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="px-6 py-4">
          {links.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="block py-2 text-[var(--text)] hover:text-[var(--accent)] transition"
            >
              {item.label}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            onClick={() => setOpen(false)}
            className="inline-block mt-4 w-full text-center bg-[var(--primary)] hover:bg-[var(--accent)] text-white font-semibold py-2 rounded-lg transition-colors"
          >
            Contact
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default Navbar;