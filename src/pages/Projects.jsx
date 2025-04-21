import { motion } from "framer-motion";
const projects = [
    {
        title: "Portfolio Website",
        description: "A personal portfolio website showcasing my projects and skills.",
        tech: "React, Tailwind CSS, Framer Motion",
        img: "",
        link: "https://szab0lcs9.github.io/",
    },
    {
        title: "Kanban Board App",
        description: "A Kanban board application with AI integration. I was part of the Frontend team.\nMy role was to create the UI/UX. Implement functionalities like navbar, sidebar, menu, cards, and drag-and-drop features.",
        tech: "Laravel, React, MySQL",
        img: "kanban_board.png",
        link: "",
    },
    {
        title: "Unity Desktop Game",
        description: "This project is my first 2.5D game made with Unity and C# for my thesis. " +
        "The game is a strategy shooter game where you have to save the starship from enemies. " +
        "You can collect gold from asteroids and buy upgrades for your ship." +
        "The game is not finished yet, but I will continue to work on it." +
        "In the development process, I focused on the SOLID principles, design patterns, and clean code." ,
        tech: "Unity, C#",
        img: "stellar_siege.png",
        link: "https://github.com/szab0lcs9/stellar-siege",
    },
    {
        title: "Simple login-register form",
        description: "A simple login and register form frontend project. This was one of my first projects.",
        tech: "HTML, CSS, JavaScript",
        img: "login_register_form.png",
        link: "https://github.com/szab0lcs9/login-register-form",
    },
];


const Projects = () => {
    return (
        <section className="py-20 px-10 flex flex-col items-center gap-16 relative">
            <h2 className="text-4xl font-bold text-blue-400">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-screen-xl">
                {projects.map((project, index) => (
                    <motion.div
                        key={index} 
                        className="bg-gray-800 p-6 rounded-lg shadow-lg"
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.6 }}>
                        <h3 className="text-xl font-semibold text-blue-400">{project.title}</h3>
                        <img src={project.img.length > 0 ? project.img : null} alt={project.title} className="mt-4 rounded-lg" />
                        <p className="text-gray-300 mt-2">{project.description}</p>
                        <p className="text-gray-500 mt-1">{project.tech}</p>
                        {
                            project.link && 
                            project.link.length > 0 ?
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 mt-4 inline-block">View Project</a>
                            : <p className="text-gray-600 mt-4 inline-block">View Project</p>
                        }
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;