"use client";

import { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setTimeout(() => {
      setIsHeaderVisible(true);
    }, 100); // Tambahkan delay kecil untuk memastikan render awal
  }, []);

  if (!isMounted) return null; // Cegah render sebelum mounted

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={isHeaderVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 shadow-md py-4 transition-all duration-300"
    >
      <div className="container mx-auto px-6 flex justify-between items-center w-full">
        <h1 className="text-xl font-bold text-gray-800 dark:text-white">
          Salman&apos;s Portfolio
        </h1>

        {/* Navbar - Desktop Mode */}
        <nav className="hidden md:flex items-center space-x-8 text-gray-700 dark:text-gray-300">
          {["About Me", "Skills", "Projects"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="hover:text-green-500 dark:hover:text-green-500 transition font-medium"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Light/Dark Mode Toggle */}
        <div className="hidden md:flex items-center space-x-4">
          <button onClick={toggleTheme} className="text-gray-700 dark:text-white">
            {theme === "light" ? <FiMoon size={24} /> : <FiSun size={24} />}
          </button>
        </div>

        {/* Hamburger Menu Button (Mobile) */}
        <button
          className="md:hidden text-gray-800 dark:text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX size={30} /> : <FiMenu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden absolute top-16 left-0 w-full bg-white dark:bg-gray-900 shadow-md p-6 flex flex-col items-center space-y-4"
        >
          {["About Me", "Skills", "Projects"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-gray-800 dark:text-white hover:text-green-500 dark:hover:text-yellow-400 transition font-medium"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </Link>
          ))}

          {/* Dark Mode Toggle di Mobile */}
          <button onClick={toggleTheme} className="text-gray-700 dark:text-white mt-4">
            {theme === "light" ? <FiMoon size={24} /> : <FiSun size={24} />}
          </button>
        </motion.div>
      )}
    </motion.header>
  );
}
