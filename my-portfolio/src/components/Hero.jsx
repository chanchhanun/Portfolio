function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-r from-black to-gray-800 text-white"
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
        Hi, I'm Your Name 👋
      </h1>

      <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-6 max-w-xl">
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
