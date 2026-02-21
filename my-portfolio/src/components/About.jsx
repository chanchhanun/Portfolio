function About() {
  return (
    <section id="about" className="py-20 px-6 text-center">
      <h2 className="text-3xl font-bold mb-6">About Me</h2>

      <p className="max-w-2xl mx-auto text-gray-600 mb-6 text-sm md:text-base">
        I'm a passionate student learning modern web development.
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        {["HTML", "CSS", "JavaScript", "React", "Git"].map((skill) => (
          <span
            key={skill}
            className="bg-gray-200 px-4 py-2 rounded-full text-sm md:text-base"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export default About;
