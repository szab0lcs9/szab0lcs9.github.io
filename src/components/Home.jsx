import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import { Github, Linkedin, Code } from "lucide-react";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-gray-300 flex flex-col items-center overflow-hidden">
      {/* Floating and Blurry Background Elements */}
      <motion.div 
        className="absolute top-10 left-10 w-72 h-72 bg-blue-700 rounded-full opacity-40 blur-[120px]" 
        animate={{ x: [0, 100, -100, 0], y: [0, 100, -100, 0] }} 
        transition={{ repeat: Infinity, duration: 20 }}
      />
      <motion.div 
        className="absolute bottom-10 right-10 w-96 h-96 bg-gray-700 rounded-full opacity-40 blur-[140px]" 
        animate={{ x: [0, -100, 100, 0], y: [0, -100, 100, 0] }} 
        transition={{ repeat: Infinity, duration: 25 }}
      />

      {/* Header */}
      <header className="w-full py-6 px-10 flex justify-between items-center bg-gray-900 bg-opacity-80 backdrop-blur-lg shadow-lg relative z-10">
        <motion.h1 
          className="text-4xl font-extrabold tracking-wide text-blue-400" 
          initial={{ opacity: 0, x: -20 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.6 }}
        >
          Veres Szabolcs
        </motion.h1>
        <nav>
          <ul className="flex gap-8 text-lg font-medium text-blue-300">
            <motion.li whileHover={{ scale: 1.1 }}><a href="#about" className="hover:text-blue-400 transition">About</a></motion.li>
            <motion.li whileHover={{ scale: 1.1 }}><a href="#projects" className="hover:text-blue-400 transition">Projects</a></motion.li>
            <motion.li whileHover={{ scale: 1.1 }}><a href="#contact" className="hover:text-blue-400 transition">Contact</a></motion.li>
          </ul>
        </nav>
      </header>
      
      {/* Hero Section */}
      <section className="text-center mt-32 relative z-10">
        <motion.h2 
          className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-gray-400" 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
        >
          Lorem ipsum
        </motion.h2>
        <p className="text-gray-400 mt-6 max-w-xl mx-auto text-lg">
          Passionate about creating modern, interactive, and user-friendly web applications with the latest technologies.
        </p>
        <motion.div className="mt-8 flex justify-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Button className="px-6 py-3 text-lg bg-blue-600 text-white">Download Resume</Button>
          <Button variant="outline" className="px-6 py-3 text-lg border-blue-500 text-blue-300">View Projects</Button>
        </motion.div>
      </section>
      
      {/* Portfolio Section */}
      <section id="projects" className="mt-32 w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        <motion.div 
          className="p-8 bg-gray-900 bg-opacity-80 backdrop-blur-lg rounded-3xl shadow-xl" 
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-3xl font-semibold mb-3 text-blue-400">About Me</h3>
          <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil tempore dicta nulla aliquam. Doloribus et suscipit a praesentium pariatur quo error atque, odio aliquid corporis beatae adipisci dolor porro provident..</p>
        </motion.div>
        
        <motion.div 
          className="p-8 bg-gray-900 bg-opacity-80 backdrop-blur-lg rounded-3xl shadow-xl" 
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-3xl font-semibold mb-3 text-blue-400">My Work</h3>
          <p className="text-gray-400">Explore my latest projects built with modern technologies like React, Next.js, and Tailwind CSS.</p>
          <Button className="mt-6 bg-blue-600 text-white">View Portfolio</Button>
        </motion.div>
      </section>
      
      {/* Footer */}
      <footer className="mt-32 py-8 w-full text-center bg-gray-900 bg-opacity-80 backdrop-blur-lg relative z-10">
        <p className="text-gray-400 text-lg">&copy; 2025 Veres Szabolcs. All Rights Reserved.</p>
        <div className="flex justify-center gap-6 mt-6">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <Github className="w-9 h-9 text-blue-400 hover:text-blue-300 transition duration-300" />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-9 h-9 text-blue-400 hover:text-blue-300 transition duration-300" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Code className="w-9 h-9 text-blue-400 hover:text-blue-300 transition duration-300" />
          </a>
        </div>
      </footer>
    </div>
  );
}
