function Projects() {
  const projects = [
    {
      title: "RESTFUL API with Django",
      description:
        "Django REST Framework for an e-commerce application, featuring user authentication, product management, and order processing.",
      link: "https://github.com/chanchhanun/",
    },
    {
      title: "Grocery List App",
      description:
        "Flutter app for managing grocery lists with real-time updates with API.",
      link: "https://github.com/chanchhanun/",
    },
    {
      title: "E-commerce App (Kotlin)",
      description:
        "Fully functional Kotlin-based mobile e-commerce application with product listings, cart functionality, and checkout process.",
      link: "https://github.com/chanchhanun/",
    },
    {
      title: "Library Management System(Flutter)",
      description:
        "A Flutter-based application for managing library operations including book listings, borrowing, and returning.",
      link: "https://github.com/chanchhanun/",
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 px-6 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white"
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Header */}
        <h2 className="text-4xl font-bold mb-4">My Projects</h2>
        <p className="text-gray-300 mb-12 text-lg">
          A few projects I’ve built to showcase my skills and experience in
          mobile and web development.
        </p>

        {/* Project Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900/70 border border-gray-700 rounded-2xl shadow-xl p-6 flex flex-col justify-between hover:shadow-[0_0_25px_rgba(34,211,238,0.6)] transform hover:-translate-y-2 transition-all duration-300"
            >
              <div>
                <h3 className="text-2xl font-semibold mb-3 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-6">{project.description}</p>
              </div>

              {/* Optional button */}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-block px-6 py-2 bg-cyan-500 text-white rounded-xl font-medium text-sm hover:bg-cyan-400 transition"
                >
                  Request For Project
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
