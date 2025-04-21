import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import profileImg from "../assets/react.svg"; // replace with your real photo

const Home = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 md:gap-20 px-6 py-16 md:py-32 max-w-7xl mx-auto">
      
      {/* Left: Text */}
      <motion.div
        className="flex flex-col items-start text-left will-change-transform"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-400 mb-4">
        Hey, I’m Szabolcs Veres!
        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-xl mb-6 leading-relaxed">
        I love building fun, interactive stuff—whether it’s a sleek website or a quirky little game. I’m especially into frontend development and game design, and I’ve been spending my time learning, experimenting, and bringing ideas to life.
        </p>
        <p className="text-lg md:text-xl text-gray-300 max-w-xl mb-6 leading-relaxed">
        This is my little corner of the internet where I share the projects I’ve been working on. Take a look around!
        </p>
        <div className="flex gap-4">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-2xl shadow-sm transition"
          >
            View Projects <ArrowRight size={20} />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 text-blue-400 border border-blue-400 hover:bg-blue-800 rounded-2xl transition"
          >
            Contact Me
          </Link>
        </div>
      </motion.div>

      {/* Right: Image */}
      <motion.div
        className="relative w-60 md:w-72 lg:w-80 rounded-3xl overflow-hidden bg-gray-800 border border-gray-700 shadow-md will-change-transform"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        <img
          src={profileImg}
          alt="Veres Szabolcs"
          className="w-full h-auto object-contain transition-transform duration-300 hover:scale-105"
        />
      </motion.div>
    </section>
  );
};

export default Home;
