function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-gray-900 text-white"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <h2 className="text-4xl font-bold mb-6">
          Contact
        </h2>

        <p className="text-lg text-gray-300 mb-12">
          Here’s how to find me professionally online.
        </p>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Email Card */}
          <div className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold mb-2 text-cyan-400">Email</h3>
            <p className="text-gray-200 text-sm md:text-base">
              chhemchanchhanun@gmail.com
            </p>
          </div>

          {/* GitHub Card */}
          <div className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold mb-2 text-cyan-400">GitHub</h3>
            <a
              href="https://github.com/chanchhanun"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-cyan-500 transition"
            >
              github.com/chanchhanun
            </a>
          </div>

          {/* LinkedIn Card */}
          <div className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold mb-2 text-cyan-400">LinkedIn</h3>
            <a
              href="https://www.linkedin.com/in/chanchhanun-chhem-b584203ab/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-cyan-500 transition"
            >
              linkedin.com/in/chanchhanun
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;