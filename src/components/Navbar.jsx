import { motion } from 'framer-motion';
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from 'react-router-dom';


const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="w-full py-6 px-10 flex justify-between items-center bg-gray-900 bg-opacity-80 backdrop-blur-lg shadow-lg relative z-10">
            <motion.h1 
                className="text-2xl md:text-4xl font-bold tracking-wide text-blue-400" 
                initial={{ opacity: 0, x: -20 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.6 }}
            ><a href="#home">Veres Szabolcs</a>
            </motion.h1>
            <nav className='hidden md:flex'>
                <ul className="flex gap-8 text-lg font-medium text-blue-300">
                    <motion.li whileHover={{ scale: 1.1 }}><a href="#about" className="hover:text-blue-400 transition">About</a></motion.li>
                    <motion.li whileHover={{ scale: 1.1 }}><a href="#projects" className="hover:text-blue-400 transition">Projects</a></motion.li>
                    <motion.li whileHover={{ scale: 1.1 }}><Link to="/contact" className="hover:text-blue-400 transition">Contact</Link></motion.li>
                </ul>
            </nav>

            <div className="md:hidden z-20">
                <button onClick={() => setMenuOpen(!menuOpen)} className="text-indigo-300 hover:text-indigo-400 transition">
                {menuOpen ? <X size={32} /> : <Menu size={32} />}
                </button>
            </div>


            {menuOpen && (
                <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-full left-0 w-full bg-gray-900 bg-opacity-95 backdrop-blur-md text-center py-6 flex flex-col gap-6 text-lg text-indigo-300 md:hidden"
                >
                <a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-indigo-400 transition">About</a>
                <a href="#projects" onClick={() => setMenuOpen(false)} className="hover:text-indigo-400 transition">Projects</a>
                <a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-indigo-400 transition">Contact</a>
                </motion.div>
            )}
        </header>
    );
};

export default Navbar;