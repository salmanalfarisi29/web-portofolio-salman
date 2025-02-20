"use client";

import { motion } from "framer-motion";

const projects = [
  {
    name: "Berita Acara Kejaksaan RI (RITASARI)",
    description: "Automatic conversation logging desktop application using speech-to-text technology. Built the front-end with Vue.js and WebSocket integration.",
    technologies: ["Vue.js", "WebSocket", "Express.js"],
  },
  {
    name: "Methings",
    description: "A more advanced version of RITASARI, with enhanced features. Responsible as a front-end developer using Vue.js.",
    technologies: ["Vue.js", "WebSocket", "Express.js"],
  },
  {
    name: "Basyir",
    description: "An application for tracking daily worship activities. Developed the front-end using modern UI principles.",
    technologies: ["React.js", "Tailwind CSS"],
  },
  {
    name: "Parkfacilities",
    description: "A web-based application introducing city parks in Bandung. Responsible as a front-end developer and ensured mobile responsiveness.",
    technologies: ["HTML", "CSS", "JS", "Boostrap"],
  },
  {
    name: "Service Vessel Trajectory Prediction",
    description: "Developed a ship prediction service implemented in a combat management system simulator. Role: System Analyst.",
    technologies: ["C++", "Extended Kalman Filter", "Combat Management Systems"],
  },
  {
    name: "Aiz Elektronik Company Profile",
    description: "Developed an SEO-optimized company website for Aiz Elektronik using Next.js, ensuring mobile responsiveness.",
    technologies: ["Next.js", "SEO Optimization", "Tailwind CSS"],
  },
  {
    name: "Web-based Automatic Conveyor Monitoring",
    description: "Developed a real-time monitoring system for automatic sorting using conveyor machines. Integrated WebSocket for live updates.",
    technologies: ["MERN Stack", "WebSocket", "IoT Integration"],
  },
];

export default function Projects() {
  return (
    <section className="py-16 px-6 md:px-16 bg-white-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Professional Projects
        </h2>
        <p className="text-center text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          Here are some key projects I have worked on, showcasing my experience in front-end development, system analysis, and real-time applications.
        </p>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02, boxShadow: "0px 10px 30px rgba(0,0,0,0.15)" }}
              transition={{ duration: 0.3 }}
              className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg border-l-4 border-green-500 cursor-pointer"
            >
              {/* Project Name */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {project.name}
              </h3>

              {/* Description */}
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                {project.description}
              </p>

              {/* Technologies Used */}
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="px-3 py-1 text-sm font-semibold bg-green-500 text-white rounded-lg shadow-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
