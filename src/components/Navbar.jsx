import { motion } from 'framer-motion';

const Navbar = () => {
    return (
        /* TODO: Make it responsive!! */
        <header className="w-full py-6 px-10 flex justify-between items-center bg-gray-900 bg-opacity-80 backdrop-blur-lg shadow-lg relative z-10">
            <motion.h1 
                className="text-4xl font-bold tracking-wide text-blue-400" 
                initial={{ opacity: 0, x: -20 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.6 }}
            ><a href="#home">Veres Szabolcs</a>
            </motion.h1>
            <nav>
                <ul className="flex gap-8 text-lg font-medium text-blue-300">
                    <motion.li whileHover={{ scale: 1.1 }}><a href="#about" className="hover:text-blue-400 transition">About</a></motion.li>
                    <motion.li whileHover={{ scale: 1.1 }}><a href="#projects" className="hover:text-blue-400 transition">Projects</a></motion.li>
                    <motion.li whileHover={{ scale: 1.1 }}><a href="#contact" className="hover:text-blue-400 transition">Contact</a></motion.li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;