function About() {
  const skills = [
    "Flutter",
    "Dart",
    "Kotlin",
    "Git",
    "Firebase",
    "REST APIs",
    "Django",
    "SQL",
  ];

  return (
    <section
      id="about"
      className="py-24 px-6 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* LEFT SIDE - Text */}
        <div>
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            About Me
          </h2>

          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            I'm a dedicated and growth-driven mobile developer currently pursuing my studies in college.
            I specialize in building modern, scalable, and user-focused mobile applications 
            with clean architecture and smooth performance.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed">
            I enjoy solving real-world problems through technology, continuously learning new tools,
            and improving my development workflow to create efficient and maintainable software.
          </p>
        </div>

        {/* RIGHT SIDE - Skills */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-cyan-400">
            Technical Skills
          </h3>

          <div className="flex flex-wrap gap-4">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-5 py-2 rounded-full bg-gray-900/70 border border-gray-700 shadow-md 
                hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;