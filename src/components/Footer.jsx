import { Github, Linkedin, Code } from "lucide-react";

const Footer = () => {
    return (
        <footer className="mt-32 py-8 w-full text-center bg-gray-900 bg-opacity-80 backdrop-blur-lg relative z-10">
        <p className="text-gray-400 text-lg">&copy; 2025 | All Rights Reserved.</p>
        <div className="flex justify-center gap-6 mt-6">
          <a href="https://github.com/szab0lcs9" target="_blank" rel="noopener noreferrer">
            <Github className="w-9 h-9 text-blue-400 hover:text-blue-300 transition duration-300" />
          </a>
          <a href="https://linkedin.com/in/szabolcs-veres-8661a8195" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-9 h-9 text-blue-400 hover:text-blue-300 transition duration-300" />
          </a>
        </div>
      </footer>
    );
}

export default Footer;