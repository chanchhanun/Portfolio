function Hero() {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-black to-gray-800 text-white text-center"
    >
      <h1 className="text-5xl font-bold mb-4">
        Hi, I'm Your Name 👋
      </h1>

      <p className="text-lg text-gray-300 mb-6">
        Student | React Developer | Tech Enthusiast
      </p>

      <a
        href="#projects"
        className="bg-cyan-500 px-6 py-3 rounded-lg hover:bg-cyan-600 transition"
      >
        View My Work
      </a>
    </section>
  );
}

export default Hero;