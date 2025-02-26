"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-12 dark:bg-gray-900 transition-all duration-300"
    >
      {/* Kiri: Grid Foto */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl"
        id="about-me"
      >
        {/* Animasi Hover pada Foto */}
        {["/img1.jpg", "/img2.jpg"].map((src, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="rounded-xl overflow-hidden shadow-lg"
          >
            <img
              src={src}
              alt={`about-${index}`}
              className="w-full h-80 object-cover rounded-xl"
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Kanan: Deskripsi */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 3 }}
        viewport={{ once: true }}
        className="max-w-lg mt-8 md:mt-0 md:ml-12 text-center md:text-left text-gray-900 dark:text-white"
      >
        <h2 className="text-lg font-bold uppercase tracking-wider">
          About Me
        </h2>
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2">
          Passionate About <span className="text-green-500">Building Beautiful & Functional UI</span>
        </h3>
        
        {/* Storytelling */}
        <p className="mt-4 text-gray-600 dark:text-gray-300 text-sm sm:text-base">
          I’ve always been fascinated by how technology can enhance user experience. 
          My journey started with a simple curiosity about how websites worked, which later 
          turned into a deep passion for **crafting intuitive & engaging UI.  
        </p>
        
        <p className="mt-4 text-gray-600 dark:text-gray-300 text-sm sm:text-base">
          As a <span className="font-semibold text-green-500">Front-end Developer</span>, 
          I believe that design is not just about aesthetics, but also usability and performance.  
          I focus on creating seamless experiences, ensuring every interaction feels natural and smooth.
        </p>

        {/* Statistik */}
        <div className="flex flex-col sm:flex-row justify-center md:justify-start mt-6 space-y-4 sm:space-y-0 sm:space-x-8">
          <div>
            <p className="text-2xl sm:text-3xl font-bold text-green-500">10+</p>
            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">Projects Completed</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-bold text-green-500">10+</p>
            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">Satisfied Clients</p>
          </div>
        </div>

        {/* Tombol */}
        <div className="mt-6 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <motion.a
            href="https://linkedin.com/in/salmanalfarisi31"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-green-500 text-white font-bold rounded-lg shadow-lg hover:bg-green-600 transition text-center w-full sm:w-auto"
          >
            Contact Me
          </motion.a>
          {/* <motion.a
            href="#portfolio"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 border-2 border-green-500 text-green-500 font-bold rounded-lg shadow-lg hover:bg-green-500 hover:text-white transition text-center w-full sm:w-auto"
          >
            Portfolio
          </motion.a> */}
        </div>
      </motion.div>
    </motion.section>
  );
}
