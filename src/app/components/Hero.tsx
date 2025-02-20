"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  // Efek Mengetik Looping
  const fullText = "Salman Alfarisi";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 150; // Kecepatan mengetik
  const deletingSpeed = 75; // Kecepatan menghapus

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting && index < fullText.length) {
        // Mengetik huruf per huruf
        setDisplayedText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      } else if (isDeleting && index > 0) {
        // Menghapus huruf satu per satu
        setDisplayedText((prev) => prev.slice(0, -1));
        setIndex(index - 1);
      } else {
        // Jika selesai mengetik, tunggu lalu hapus
        setIsDeleting(!isDeleting);
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [index, isDeleting]);

  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between min-h-screen px-8 md:px-20 dark:bg-gray-900 transition-all duration-300">
      {/* Kiri: Teks */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="text-left text-gray-900 dark:text-white max-w-lg"
      >
        <p className="text-lg">Hello, I am</p>
        {/* Efek Mengetik Berulang */}
        <h1 className="text-6xl font-extrabold">
          {displayedText}
          <span className="animate-blink">|</span>
        </h1>
        <p className="text-xl font-semibold mt-2 text-blue-500 dark:text-yellow-400">
          I Am Passionate Developer
        </p>
        <p className="mt-4 text-lg">
          A highly motivated Front-End Developer specializing in React.js, Next.js, JavaScript. Graduated in Informatics Engineering from Politeknik Negeri Bandung, with hands-on experience in developing responsive and dynamic web applications.
        </p>
        <motion.a
          href="/CV ATS SALMAN ALFARISI.pdf" // Pastikan file ada di public/
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
          className="absolute inset-0 bg-green-500 rounded-full w-72 h-72 md:w-96 md:h-96"
        ></motion.div>
        <img
          src="/profile.png"
          alt="Salman Alfarisi"
          className="relative z-10 w-72 h-72 md:w-96 md:h-96 object-cover rounded-full shadow-lg"
        />
      </motion.div>
    </section>
  );
}
