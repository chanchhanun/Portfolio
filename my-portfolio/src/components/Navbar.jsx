import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-black text-white px-6 py-4 flex justify-between items-center z-50">
      <h1 className="text-lg md:text-xl font-bold">MyPortfolio</h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6">
        <li><a href="#home" className="hover:text-cyan-400">Home</a></li>
        <li><a href="#about" className="hover:text-cyan-400">About</a></li>
        <li><a href="#projects" className="hover:text-cyan-400">Projects</a></li>
        <li><a href="#contact" className="hover:text-cyan-400">Contact</a></li>
      </ul>

      {/* Mobile Button */}
      <button 
        className="md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-black flex flex-col items-center gap-6 py-6 md:hidden">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;