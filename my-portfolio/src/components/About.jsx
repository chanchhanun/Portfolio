function About() {
  return (
    <section id="about" className="py-20 px-6 text-center">
      <h2 className="text-3xl font-bold mb-6">About Me</h2>

      <p className="max-w-2xl mx-auto text-gray-600 mb-6">
        I'm a passionate student learning modern web development.
        I love building interactive applications using React.
      </p>

      <div className="flex justify-center gap-4 flex-wrap">
        {["HTML", "CSS", "JavaScript", "React", "Git"].map(skill => (
          <span
            key={skill}
            className="bg-gray-200 px-4 py-2 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export default About;