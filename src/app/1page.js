"use client";

import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>My Portfolio</title>
      </Head>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-all">
        <header className="p-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold">Salman's Portfolio</h1>
          <button
            className="px-4 py-2 bg-gray-800 text-white rounded"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </header>
        
        <main className="p-6">
          {/* Hero Section */}
          <section className="text-center py-10">
            <h2 className="text-4xl font-bold">Hi, I'm Salman</h2>
            <p className="mt-2 text-lg">A Frontend Developer passionate about modern web technologies.</p>
            <button className="mt-4 px-6 py-3 bg-blue-500 text-white rounded">Contact Me</button>
          </section>
          
          {/* About Me */}
          <section className="mt-12">
            <h2 className="text-2xl font-semibold">About Me</h2>
            <p className="mt-2">I specialize in building modern, responsive, and high-performing web applications using Next.js and Tailwind CSS.</p>
          </section>
          
          {/* Skills */}
          <section className="mt-12">
            <h2 className="text-2xl font-semibold">Skills</h2>
            <ul className="mt-2 grid grid-cols-2 md:grid-cols-3 gap-4">
              <li className="p-4 bg-gray-100 dark:bg-gray-800 rounded">JavaScript</li>
              <li className="p-4 bg-gray-100 dark:bg-gray-800 rounded">React.js</li>
              <li className="p-4 bg-gray-100 dark:bg-gray-800 rounded">Next.js</li>
              <li className="p-4 bg-gray-100 dark:bg-gray-800 rounded">Tailwind CSS</li>
              <li className="p-4 bg-gray-100 dark:bg-gray-800 rounded">Node.js</li>
              <li className="p-4 bg-gray-100 dark:bg-gray-800 rounded">TypeScript</li>
            </ul>
          </section>
          
          {/* Projects */}
          <section className="mt-12">
            <h2 className="text-2xl font-semibold">Projects</h2>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded">
                <h3 className="text-xl font-bold">Project 1</h3>
                <p>A modern web application using Next.js and Tailwind CSS.</p>
                <a href="#" className="text-blue-500 dark:text-blue-400 mt-2 inline-block">View Project</a>
              </div>
              <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded">
                <h3 className="text-xl font-bold">Project 2</h3>
                <p>A portfolio website built with React.js.</p>
                <a href="#" className="text-blue-500 dark:text-blue-400 mt-2 inline-block">View Project</a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
