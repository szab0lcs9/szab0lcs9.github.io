

const Navbar = () => {
    return (
        <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-2xl font-bold">
                    <a href="#home" className="hover:text-gray-400">MyPortfolio</a>
                </div>
                <ul className="flex space-x-6">
                    <li>
                        <a href="#about" className="hover:text-gray-400">About</a>
                    </li>
                    <li>
                        <a href="#projects" className="hover:text-gray-400">Projects</a>
                    </li>
                    <li>
                        <a href="#skills" className="hover:text-gray-400">Skills</a>
                    </li>
                    <li>
                        <a href="#contact" className="hover:text-gray-400">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;