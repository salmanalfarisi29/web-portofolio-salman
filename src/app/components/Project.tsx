"use client";

export default function Projects() {
  const projects = [
    {
      name: "Berita Acara Kejaksaan RI (RITASARI)",
      description:
        "Automatic conversation logging desktop application using speech-to-text technology. Built the front-end with Vue.js and WebSocket integration.",
    },
    {
      name: "Methings",
      description:
        "A more advanced version of RITASARI, with enhanced features. Responsible as a front-end developer using Vue.js.",
    },
    {
      name: "Basyir",
      description:
        "An application for tracking daily worship activities. Developed the front-end using modern UI principles.",
    },
    {
      name: "Parkfacilities",
      description:
        "A web-based application introducing city parks in Bandung. Responsible as a front-end developer and ensured mobile responsiveness.",
    },
    {
      name: "Service Vessel Trajectory Prediction",
      description:
        "Developed a ship prediction service implemented in a combat management system simulator. Role: System Analyst.",
    },
    {
      name: "Aiz Elektronik Company Profile",
      description:
        "Developed an SEO-optimized company website for Aiz Elektronik using Next.js, ensuring mobile responsiveness.",
    },
    {
      name: "Web-based Automatic Conveyor Monitoring",
      description:
        "Developed a real-time monitoring system for automatic sorting using conveyor machines. Integrated WebSocket for live updates.",
    },
  ];

  return (
    <section className="py-16 px-6 md:px-16 bg-white-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Professional Projects
        </h2>
        <p className="text-center text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          Here are some key projects I have worked on, showcasing my experience
          in front-end development, system analysis, and real-time applications.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg border-l-4 border-green-500"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {project.name}
              </h3>
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
