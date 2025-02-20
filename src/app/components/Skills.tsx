"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "HTML, CSS, JS", level: 90 },
  { name: "React.js", level: 85 },
  { name: "Next.js", level: 80 },
  { name: "Tailwind CSS", level: 75 },
  { name: "Node.js", level: 75 },
  { name: "TypeScript", level: 70 },
];

const education = [
  {
    year: "2021-2024",
    title: "Informatics Engineering",
    institution: "Politeknik Negeri Bandung",
  },
  {
    year: "2018-2021",
    title: "SMAN 4 Bandung",
    institution: "Math and Science",
  },
];

export default function Skills() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="py-16 px-6 md:px-16 bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8"
             id="skills"
        >
          Education and Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            {education.map((edu, index) => (
              <motion.div
                key={index}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  boxShadow: "0px 0px 15px rgba(34, 197, 94, 1)", // Glow hijau lebih tajam tanpa blur
                }}
                className="bg-gray-100 dark:bg-gray-800 rounded-lg p-5 shadow-md mb-4 transition-all duration-300 border-l-4 border-green-500"
              >
                <span className="inline-block bg-green-500 text-white text-sm px-3 py-1 rounded-full font-semibold">
                  {edu.year}
                </span>
                <h3 className="text-lg font-semibold mt-2">{edu.title}</h3>
                <p className="text-gray-700 dark:text-gray-300">{edu.institution}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">My Skills</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              I specialize in front-end development, creating responsive and dynamic applications using modern technologies.
            </p>
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="mb-4"
              >
                <div className="flex justify-between">
                  <span className="text-sm font-medium">{skill.name}</span>
                  <span className="text-sm font-medium">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2 mt-1">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    className="h-full bg-green-500 rounded-full"
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
