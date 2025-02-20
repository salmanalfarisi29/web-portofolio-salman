"use client";

import { motion } from "framer-motion";

const projects = [
  {
    name: "Berita Acara Kejaksaan RI (RITASARI)",
    description:
      "Automatic conversation logging desktop application using speech-to-text technology. Built the front-end with Vue.js and WebSocket integration.",
    technologies: ["Vue.js", "WebSocket", "Speech-to-Text"],
  },
  {
    name: "Methings",
    description:
      "A more advanced version of RITASARI, with enhanced features. Responsible as a front-end developer using Vue.js.",
    technologies: ["Vue.js", "Real-time Communication"],
  },
  {
    name: "Basyir",
    description:
      "An application for tracking daily worship activities. Developed the front-end using modern UI principles.",
    technologies: ["React.js", "Tailwind CSS"],
  },
  {
    name: "Parkfacilities",
    description:
      "A web-based application introducing city parks in Bandung. Responsible as a front-end developer and ensured mobile responsiveness.",
    technologies: ["React.js", "Next.js", "Google Maps API"],
  },
  {
    name: "Service Vessel Trajectory Prediction",
    description:
      "Developed a ship prediction service implemented in a combat management system simulator. Role: System Analyst.",
    technologies: ["Python", "AI Prediction", "Combat Systems"],
  },
  {
    name: "Aiz Elektronik Company Profile",
    description:
      "Developed an SEO-optimized company website for Aiz Elektronik using Next.js, ensuring mobile responsiveness.",
    technologies: ["Next.js", "SEO Optimization", "Tailwind CSS"],
    liveDemo: "https://ais-elektronik.vercel.app/",
  },
  {
    name: "Web-based Automatic Conveyor Monitoring",
    description:
      "Developed a real-time monitoring system for automatic sorting using conveyor machines. Integrated WebSocket for live updates.",
    technologies: ["React.js", "WebSocket", "IoT Integration"],
  },
];

export default function Projects() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="py-16 px-6 md:px-16 bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Professional Projects
        </h2>
        <p className="text-center text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          Here are some key projects I have worked on, showcasing my experience in front-end development, system analysis, and real-time applications.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border-l-4 border-green-500"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {project.name}
              </h3>
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-sm font-semibold bg-green-500 text-white rounded-full shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {project.liveDemo && (
                <motion.a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 flex items-center justify-center gap-2 px-4 py-1.5 text-sm font-semibold bg-green-500 text-white rounded-full shadow-md hover:bg-green-600 transition-all"
                >
                  🌐 Live Demo
                </motion.a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
