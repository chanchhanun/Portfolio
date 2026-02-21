function Projects() {
  const projects = [
    { title: "Todo App", description: "Task manager built with React." },
    { title: "Weather App", description: "Weather API integration." },
    { title: "Calculator", description: "JavaScript calculator app." }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-100 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">
        My Projects
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg hover:scale-105 transition"
          >
            <h3 className="text-xl font-semibold mb-3">
              {project.title}
            </h3>
            <p className="text-gray-600">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;