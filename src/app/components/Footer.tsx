"use client";

import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="py-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-300 text-center shadow-[0px_-4px_10px_rgba(0,0,0,0.15)] transition-all duration-300"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Social Media Links */}
        <div className="flex space-x-6 mb-4">
          <a
            href="https://github.com/salmanalfarisi29"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
          >
            <FiGithub size={20} />
            <span>GitHub</span>
          </a>

          <a
            href="https://linkedin.com/in/salmanalfarisi31"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
          >
            <FiLinkedin size={20} />
            <span>LinkedIn</span>
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-3 transition-all duration-300">
          © {new Date().getFullYear()} Salman Alfarisi. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
}
