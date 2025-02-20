"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "JavaScript", level: 90 },
  { name: "React.js", level: 85 },
  { name: "Next.js", level: 80 },
  { name: "Tailwind CSS", level: 85 },
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
    <section className="py-16 px-6 md:px-16 bg-white-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          EDUCATION & SKILLS
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Education Section */}
          <div>
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gray-200 dark:bg-gray-800 rounded-lg p-5 shadow-md mb-4"
              >
                <span className="inline-block bg-green-500 text-white text-sm px-3 py-1 rounded-full font-semibold">
                  {edu.year}
                </span>
                <h3 className="text-lg font-semibold mt-2">{edu.title}</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {edu.institution}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Skills Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">My Skills</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              I specialize in front-end development, creating responsive and
              dynamic applications using modern technologies.
            </p>
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="mb-4"
              >
                <div className="flex justify-between">
                  <span className="text-sm font-medium">{skill.name}</span>
                  <span className="text-sm font-medium">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2 mt-1">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1 }}
                    className="h-full bg-green-500 rounded-full"
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
