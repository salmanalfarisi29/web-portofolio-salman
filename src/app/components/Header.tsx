"use client";

import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false); // State untuk mengontrol menu

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 shadow-md py-4 transition-all duration-300">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800 dark:text-white">
          Salman's Portfolio
        </h1>

        {/* Hamburger Button (Hanya muncul di mobile) */}
        <button
          className="md:hidden text-gray-800 dark:text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX size={30} /> : <FiMenu size={30} />}
        </button>

        {/* Navbar - Desktop Mode */}
        <nav className="hidden md:flex space-x-8 text-gray-700 dark:text-gray-300">
          {["About Me", "Skills", "Projects"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="hover:text-blue-600 dark:hover:text-yellow-400 transition"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Toggle Light/Dark Mode */}
        <button onClick={toggleTheme} className="hidden md:block text-gray-700 dark:text-white">
          {theme === "light" ? <FiMoon size={24} /> : <FiSun size={24} />}
        </button>
      </div>

      {/* Mobile Menu (Animated) */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden absolute top-16 left-0 w-full bg-white dark:bg-gray-900 shadow-md p-6 flex flex-col items-center space-y-4"
        >
          {["About Me", "Skills", "Projects", "Galeri"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-yellow-400 transition"
              onClick={() => setIsOpen(false)} // Tutup menu setelah klik
            >
              {item}
            </a>
          ))}

          {/* Toggle Dark Mode (Mobile) */}
          <button onClick={toggleTheme} className="text-gray-700 dark:text-white mt-4">
            {theme === "light" ? <FiMoon size={24} /> : <FiSun size={24} />}
          </button>
        </motion.div>
      )}
    </header>
  );
}
