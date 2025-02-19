"use client";

import { useTheme } from "../context/ThemeContext";
import { FiSun, FiMoon } from "react-icons/fi";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 shadow-md py-4 transition-all duration-300">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800 dark:text-white">Salman's Portfolio</h1>

        <nav className="hidden md:flex space-x-8 text-gray-700 dark:text-gray-300">
          {["About Me", "Skills", "Projects", "Galeri"].map((item) => (
            <a key={item} href="#" className="hover:text-blue-600 dark:hover:text-yellow-400">
              {item}
            </a>
          ))}
        </nav>

        {/* Toggle Light/Dark Mode */}
        <button onClick={toggleTheme} className="text-gray-700 dark:text-white">
          {theme === "light" ? <FiMoon size={24} /> : <FiSun size={24} />}
        </button>
      </div>
    </header>
  );
}
