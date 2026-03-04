

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add scroll listener for that "floating" effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 px-6 ${
      scrolled ? "top-4" : "top-0"
    }`}>
      <div className={`max-w-5xl mx-auto flex justify-between items-center transition-all duration-500 ${
        scrolled 
          ? "bg-[#0F172A]/70 backdrop-blur-xl border border-white/10 py-3 px-8 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.3)]" 
          : "bg-transparent py-6 px-4"
      }`}>
        
        {/* Logo with high-end typography */}
        <a href="#home" className="text-xl font-bold tracking-tight hover:opacity-80 transition-opacity">
          RSK<span className="text-blue-500 font-extrabold italic">Digital</span>
        </a>

        {/* Desktop Links with "Underline" interaction */}
        <div className="hidden md:flex gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="relative text-sm font-medium text-slate-300 hover:text-white transition-colors group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Hamburger with Animation */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          <div className={`w-6 h-[2px] bg-white transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
          <div className={`w-6 h-[2px] bg-white transition-all ${open ? "opacity-0" : ""}`}  />
          <div className={`w-6 h-[2px] bg-white transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Modern Mobile Menu Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-6 top-24 bg-[#0F172A]/95 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 flex flex-col items-center gap-8 md:hidden shadow-2xl"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setOpen(false)}
                className="text-2xl font-semibold hover:text-blue-500 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;