export default function Skills() {
    const skills = ["JavaScript", "React.js", "Next.js", "Tailwind CSS", "Node.js", "TypeScript"];
  
    return (
    <section className="mt-12">
    <h2 className="text-3xl font-semibold text-center">Skills</h2>
    <div className="mt-6 flex flex-wrap justify-center gap-4">
        {["JavaScript", "React.js", "Next.js", "Tailwind CSS", "Node.js", "TypeScript"].map(
        (skill, index) => (
            <span
            key={index}
            className="px-5 py-3 bg-blue-100 text-blue-700 font-medium rounded-full shadow-md hover:scale-110 transition"
            >
            {skill}
            </span>
        )
        )}
    </div>
    </section>
    );
  }
  