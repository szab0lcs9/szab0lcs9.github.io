import { motion } from 'framer-motion';
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full py-6 px-10 flex justify-between items-center bg-gray-900 bg-opacity-80 backdrop-blur-lg shadow-md relative z-10">
      
      {/* Logo */}
      <h1 className="text-2xl md:text-4xl font-bold tracking-wide text-blue-400 will-change-transform">
        <a href="/">Szabolcs Veres</a>
      </h1>

      {/* Desktop Nav */}
      <nav className="hidden md:flex">
        <ul className="flex gap-8 text-lg font-medium text-blue-300">
          <motion.li whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
            <Link to="/about" className="hover:text-blue-400 transition">About</Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
            <Link to="/projects" className="hover:text-blue-400 transition">Projects</Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
            <Link to="/contact" className="hover:text-blue-400 transition">Contact</Link>
          </motion.li>
        </ul>
      </nav>

      {/* Mobile Toggle Button */}
      <div className="md:hidden z-20">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-blue-300 hover:text-blue-400 transition"
        >
          {menuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Dropdown Nav */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="absolute top-full left-0 w-full bg-gray-900 bg-opacity-95 backdrop-blur-md text-center py-6 flex flex-col gap-6 text-lg text-blue-300 z-50 md:hidden will-change-transform"
        >
          <Link to="/about" onClick={() => setMenuOpen(false)} className="hover:text-blue-400 transition">About</Link>
          <Link to="/projects" onClick={() => setMenuOpen(false)} className="hover:text-blue-400 transition">Projects</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)} className="hover:text-blue-400 transition">Contact</Link>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
