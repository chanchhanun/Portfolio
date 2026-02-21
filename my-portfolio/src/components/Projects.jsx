function Projects() {
  const projects = [
    {
      title: "Todo App",
      description: "Task manager built with React."
    },
    {
      title: "Weather App",
      description: "Weather app using API integration."
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-10">My Projects</h2>

      <div className="flex justify-center gap-8 flex-wrap">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg w-80 hover:scale-105 transition"
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