"use client";

import { motion } from "framer-motion";

const projects = [
  {
    name: "Berita Acara Kejaksaan RI (RITASARI)",
    description:
      "Automatic conversation logging desktop application using speech-to-text technology. Built the front-end with Vue.js and WebSocket integration.",
    technologies: ["Vue.js", "Electron.js", "Socket.io", "Express.js"],
  },
  {
    name: "Methings",
    description:
      "A more advanced version of RITASARI, with enhanced features. Responsible as a front-end developer using Vue.js and WebSocket.",
    technologies: ["Vue.js", "Electron.js", "Socket.io", "Express.js"],
  },
  {
    name: "Basyir - Islamic Reminder Platform",
    description:
      "An Islamic reminder platform designed to help users record and track daily worship activities with customizable daily notes. Developed using React.js and CodeIgniter.",
    technologies: ["React.js", "CodeIgniter"],
  },
  {
    name: "Parkfacilities",
    description:
      "A web-based application introducing city parks in Bandung. Developed the front-end and ensured mobile responsiveness.",
    technologies: ["Vue.js", "CSS", "JavaScript", "Bootstrap"],
  },
  {
    name: "Service Vessel Trajectory Prediction",
    description:
      "Developed a ship trajectory prediction service implemented in a combat management system simulator using Extended Kalman Filter.",
    technologies: ["C++", "Extended Kalman Filter", "MQTT", "Combat Management Systems"],
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
    technologies: ["MERN Stack", "WebSocket", "IoT Integration"],
  },
  {
    name: "Geopark Ciletuh Website",
    description:
      "A tourism information portal for Geopark Ciletuh. Developed the front-end using Vue.js for an optimized user experience.",
    technologies: ["Vue.js", "CSS", "JavaScript"],
  },
  {
    name: "Uncall: Uncontrolled Ball Game 3D",
    description:
      "A physics-based arcade multiplayer game developed using Godot Engine.",
    technologies: ["Godot Engine", "Physics-based Movement", "Multiplayer"],
  },
  {
    name: "GradCAM-Based Visual Explanation Model",
    description:
      "Web-based AI explainability platform using Streamlit to visualize GradCAM heatmaps from deep learning models.",
    technologies: ["Streamlit", "Python", "GradCAM", "Machine Learning"],
  },
  {
    name: "Machine Learning - Classification & Clustering",
    description:
      "Developed classification and clustering models using supervised and unsupervised learning techniques.",
    technologies: ["Python", "Scikit-Learn", "Random Forest", "K-Means", "DBSCAN"],
  },
];

export default function Projects() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      id="projects"
      className="py-16 px-6 md:px-16 bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Projects
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
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 20px rgba(0, 255, 100, 0.2)",
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border-l-4 border-green-500 cursor-pointer"
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
