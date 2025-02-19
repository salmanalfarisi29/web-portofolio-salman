"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between min-h-screen px-8 md:px-20 dark:bg-gray-900 transition-all duration-300">
      {/* Kiri: Teks */}
      <div className="text-left text-gray-900 dark:text-white max-w-lg">
        <p className="text-lg">Hello, I am</p>
        <h1 className="text-6xl font-extrabold">Salman Alfarisi</h1>
        <p className="text-xl font-semibold mt-2 text-blue-500 dark:text-yellow-400">
          I Am Passionate Developer
        </p>
        <p className="mt-4 text-lg">
          I design and develop services for customers of all sizes, specializing in creating stylish,
          modern websites, web services, and online stores.
        </p>
        <button className="mt-6 px-6 py-3 bg-green-500 text-white font-bold rounded shadow-lg hover:bg-green-600 transition">
          Download CV
        </button>
      </div>

      {/* Kanan: Gambar */}
      <div className="relative mt-10 md:mt-0">
        <div className="absolute inset-0 bg-green-500 rounded-full w-72 h-72 md:w-96 md:h-96"></div>
        <img
          src="/profile.png"
          alt="Salman Alfarisi"
          className="relative z-10 w-72 h-72 md:w-96 md:h-96 object-cover rounded-full shadow-lg"
        />
      </div>
    </section>
  );
}
