function About() {
  return (
    <section id="about" className="py-20 px-6 text-center">
      <h2 className="text-3xl font-bold mb-6">About Me</h2>

      <p className="max-w-2xl mx-auto text-gray-600 mb-6 text-sm md:text-base">
        I'm a passionate student learning modern mobile development.
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        {[
          'Flutter',
          'Dart',
          'Kotlin',
          'Git',
          'Firebase',
        ].map((skill) => (
          <span
            key={skill}
            className="bg-gray-600 px-4 py-2 rounded-full text-sm md:text-base"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export default About;
