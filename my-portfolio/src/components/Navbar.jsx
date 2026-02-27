import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <div className="fixed top-6 left-0 w-full flex justify-center z-50 px-4">
      <nav className="w-full max-w-6xl backdrop-blur-md bg-black/60 border border-white/10 rounded-2xl shadow-xl">
        <div className="flex justify-between items-center px-6 py-4">
          
          {/* Logo */}
          <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Chanchhanun
          </h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((item) => (
              <li key={item.name}>
                <a
                  href={item.link}
                  className="relative text-gray-300 hover:text-cyan-400 transition duration-300"
                >
                  {item.name}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cyan-400 transition-all duration-300 hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col items-center gap-6 py-6 border-t border-white/10">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.link}
                onClick={() => setMenuOpen(false)}
                className="text-gray-300 hover:text-cyan-400 text-lg transition"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;