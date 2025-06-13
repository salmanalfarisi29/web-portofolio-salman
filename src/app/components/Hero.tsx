"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  // Efek Mengetik Looping dengan Delay
  const fullText = "Salman Alfarisi";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 100; // Kecepatan mengetik
  const deletingSpeed = 50; // Kecepatan menghapus
  const delayBeforeDelete = 1500; // Delay sebelum mulai menghapus

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting && index < fullText.length) {
        setDisplayedText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      } else if (isDeleting && index > 0) {
        setDisplayedText((prev) => prev.slice(0, -1));
        setIndex(index - 1);
      } else {
        setTimeout(() => setIsDeleting(!isDeleting), delayBeforeDelete); // Delay sebelum menghapus
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [index, isDeleting]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative flex flex-col md:flex-row items-center justify-between min-h-screen px-6 md:px-20 py-10 dark:bg-gray-900 transition-all duration-300 border-b border-gray-300 dark:border-gray-700"
    >
      {/* Kiri: Teks */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="text-left text-gray-900 dark:text-white max-w-lg text-center md:text-left"
      >
        <p className="text-lg">Hello, I am</p>
        {/* Efek Mengetik Berulang */}
        <h1 className="text-4xl md:text-6xl font-extrabold">
          {displayedText}
          <span className="animate-blink">|</span>
        </h1>
        <p className="text-lg md:text-xl font-semibold mt-2 text-green-500">
          Front-End Web Developer
        </p>
        <p className="mt-4 text-md md:text-lg leading-relaxed">
          A highly motivated Front-End Developer specializing in React.js, Next.js, JavaScript.
          Graduated in Informatics Engineering from Politeknik Negeri Bandung, with hands-on experience
          in developing responsive and dynamic web applications.
        </p>
        <motion.a
          href="/CV ATS SALMAN ALFARISI.pdf"
          download="CV ATS SALMAN ALFARISI.pdf"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 px-6 py-3 bg-green-500 text-white font-bold rounded shadow-lg hover:bg-green-600 transition inline-block"
        >
          Download CV
        </motion.a>
      </motion.div>

      {/* Kanan: Gambar */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="relative mt-10 md:mt-0"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-green-500 rounded-full w-60 h-60 md:w-96 md:h-96"
        ></motion.div>
        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          src="/profile.png"
          alt="Salman Alfarisi"
          className="relative z-10 w-60 h-60 md:w-96 md:h-96 object-cover rounded-full shadow-lg"
        />
      </motion.div>
    </motion.section>
  );
}
