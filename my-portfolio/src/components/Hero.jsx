import { useEffect, useState } from "react";
import profile from "../assets/profile.jpg";

function Hero() {
  const fullText = "Hi, I'm Chanchhanun";
  const [text, setText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  // Typing effect
  useEffect(() => {
    let index = 0;
    const typing = setInterval(() => {
      setText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) {
        clearInterval(typing);
      }
    }, 80);

    return () => clearInterval(typing);
  }, []);

  // Blinking cursor
  useEffect(() => {
    const cursorBlink = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorBlink);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white px-6"
    >
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT SIDE (Text Content) */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {text}
            </span>
            <span className="ml-1">{showCursor ? "|" : " "}</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed">
            College Student · Mobile Developer
          </p>

          <p className="text-gray-400 max-w-lg mb-8">
            I design and build clean, scalable, and user-focused mobile
            applications. Passionate about performance, smooth UI, and
            turning ideas into real products.
          </p>

          <a
            href="#projects"
            className="inline-block bg-cyan-500 px-8 py-3 rounded-xl font-semibold 
            transition-all duration-300 hover:bg-cyan-400 hover:scale-105 
            hover:shadow-[0_0_25px_rgba(34,211,238,0.6)]"
          >
            View My Work
          </a>
        </div>

        {/* RIGHT SIDE (Profile Image) */}
        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <div className="absolute inset-0 bg-cyan-500 blur-3xl opacity-20 rounded-full"></div>

            <img
              src={profile} 
              alt="Chanchhanun"
              className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full 
              border-4 border-cyan-400 shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;