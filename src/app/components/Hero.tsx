"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between min-h-screen px-8 md:px-20 dark:bg-gray-900 transition-all duration-300">
      {/* Kiri: Teks */}
      <motion.div
        className="text-left text-gray-900 dark:text-white max-w-lg"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <p className="text-lg">Hello, I am</p>
        <motion.h1
          className="text-6xl font-extrabold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          Salman Alfarisi
        </motion.h1>
        <motion.p
          className="text-xl font-semibold mt-2 text-blue-500 dark:text-yellow-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
        >
          I Am Passionate Developer
        </motion.p>
        <motion.p
          className="mt-4 text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
        >
          I design and develop services for customers of all sizes, specializing in creating stylish,
          modern websites, web services, and online stores.
        </motion.p>
        <motion.button
          className="mt-6 px-6 py-3 bg-green-500 text-white font-bold rounded shadow-lg hover:bg-green-600 transition"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
        >
          Download CV
        </motion.button>
      </motion.div>

      {/* Kanan: Gambar */}
      <motion.div
        className="relative mt-10 md:mt-0"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
      >
        <div className="absolute inset-0 bg-green-500 rounded-full w-72 h-72 md:w-96 md:h-96"></div>
        <motion.img
          src="/profile.png"
          alt="Salman Alfarisi"
          className="relative z-10 w-72 h-72 md:w-96 md:h-96 object-cover rounded-full shadow-lg"
          animate={{
            y: [0, -5, 0], // Floating animation
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </section>
  );
}
