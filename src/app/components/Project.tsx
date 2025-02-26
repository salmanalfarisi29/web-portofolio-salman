"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const categories = [
  "All", "Web Development", "Desktop Applications", "Game Development", "AI/Machine Learning", "AI Web Apps",
];

const projects = [
  {
    name: "Berita Acara Kejaksaan RI (RITASARI)",
    description:
      "Automatic conversation logging desktop application using speech-to-text technology. Built the front-end with Vue.js and WebSocket integration.",
    technologies: ["Vue.js", "Electron.js", "Socket.io", "Express.js"],
    categories: ["Desktop Applications", "Web Development"],
  },
  {
    name: "Methings",
    description:
      "A more advanced version of RITASARI, with enhanced features. Responsible as a front-end developer using Vue.js and WebSocket.",
    technologies: ["Vue.js", "Electron.js", "Socket.io", "Express.js"],
    categories: ["Desktop Applications", "Web Development"],
  },
  {
    name: "Basyir - Islamic Reminder Platform",
    description:
      "An Islamic reminder platform designed to help users record and track daily worship activities with customizable daily notes. Developed using React.js and CodeIgniter.",
    technologies: ["React.js", "CodeIgniter"],
    categories: ["Web Development"],
  },
  {
    name: "Parkfacilities",
    description:
      "A web-based application introducing city parks in Bandung. Developed the front-end and ensured mobile responsiveness.",
    technologies: ["Vue.js", "CSS", "JavaScript", "Bootstrap"],
    categories: ["Web Development"],
  },
  {
    name: "Service Vessel Trajectory Prediction",
    description:
      "Developed a ship trajectory prediction service implemented in a combat management system simulator using Extended Kalman Filter.",
    technologies: ["C++", "Extended Kalman Filter", "MQTT", "Combat Management Systems"],
    categories: ["AI/Machine Learning"],
  },
  {
    name: "Aiz Elektronik Company Profile",
    description:
      "Developed an SEO-optimized company website for Aiz Elektronik using Next.js, ensuring mobile responsiveness.",
    technologies: ["Next.js", "SEO Optimization", "Tailwind CSS"],
    liveDemo: "https://ais-elektronik.vercel.app/",
    categories: ["Web Development"],
  },
  {
    name: "Web-based Automatic Conveyor Monitoring",
    description:
      "Developed a real-time monitoring system for automatic sorting using conveyor machines. Integrated WebSocket for live updates.",
    technologies: ["MERN Stack", "WebSocket", "IoT Integration"],
    categories: ["Web Development"],
  },
  {
    name: "Geopark Ciletuh Website",
    description:
      "A tourism information portal for Geopark Ciletuh. Developed the front-end using Vue.js for an optimized user experience.",
    technologies: ["Vue.js", "CSS", "JavaScript"],
    categories: ["Web Development"],
  },
  {
    name: "Uncall: Uncontrolled Ball Game 3D",
    description:
      "A physics-based arcade multiplayer game developed using Godot Engine.",
    technologies: ["Godot Engine", "Physics-based Movement", "Multiplayer"],
    categories: ["Game Development"],
  },
  {
    name: "GradCAM-Based Visual Explanation Model",
    description:
      "Web-based AI explainability platform using Streamlit to visualize GradCAM heatmaps from deep learning models.",
    technologies: ["Streamlit", "Python", "GradCAM", "Machine Learning"],
    categories: ["AI Web Apps", "Web Development"],
  },
  {
    name: "Machine Learning - Classification & Clustering",
    description:
      "Developed classification and clustering models using supervised and unsupervised learning techniques.",
    technologies: ["Python", "Scikit-Learn", "Random Forest", "K-Means", "DBSCAN"],
    categories: ["AI/Machine Learning"],
  },
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter((project) => project.categories.includes(selectedCategory));

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      id="projects"
      className="py-16 px-6 md:px-10 bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Projects
        </h2>
        <p className="text-center text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-8">
          Here are some key projects I have worked on, showcasing my experience in front-end development, system analysis, and real-time applications.
        </p>
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-2 rounded-lg text-xs font-semibold transition-all ${
                selectedCategory === category
                  ? "bg-green-500 text-white"
                  : "bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 4px 10px rgba(0, 255, 100, 0.2)",
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              className="p-5 bg-white dark:bg-gray-800 rounded-xl shadow-md border-l-4 border-green-500"
            >
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                {project.name}
              </h3>
              <p className="mt-1 text-gray-700 dark:text-gray-300 text-sm">
                {project.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-1">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 text-xs font-semibold bg-green-500 text-white rounded-md shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
