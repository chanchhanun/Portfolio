function Navbar() {
  return (
    <nav className="fixed w-full bg-black text-white px-8 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">MyPortfolio</h1>

      <ul className="flex gap-6">
        <li><a href="#home" className="hover:text-cyan-400">Home</a></li>
        <li><a href="#about" className="hover:text-cyan-400">About</a></li>
        <li><a href="#projects" className="hover:text-cyan-400">Projects</a></li>
        <li><a href="#contact" className="hover:text-cyan-400">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;