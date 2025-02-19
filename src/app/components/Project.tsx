export default function Projects() {
    const projects = [
      {
        name: "Project 1",
        description: "A modern web application using Next.js and Tailwind CSS.",
        link: "#",
      },
      {
        name: "Project 2",
        description: "A portfolio website built with React.js.",
        link: "#",
      },
    ];
  
    return (
    <section className="mt-12">
    <h2 className="text-3xl font-semibold text-center">Projects</h2>
    <div className="grid md:grid-cols-2 gap-6 mt-6">
        {[
        { name: "Project 1", desc: "A modern Next.js App.", link: "#" },
        { name: "Project 2", desc: "Interactive Portfolio Site.", link: "#" },
        ].map((project, index) => (
        <div
            key={index}
            className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
        >
            <h3 className="text-xl font-bold">{project.name}</h3>
            <p className="mt-2">{project.desc}</p>
            <a
            href={project.link}
            className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 hover:scale-105 transition"
            >
            View Project
            </a>
        </div>
        ))}
    </div>
    </section>
    );
  }
  