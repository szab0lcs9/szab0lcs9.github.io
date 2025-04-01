const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center">
                <p>&copy; 2023 Your Name. All rights reserved.</p>
                <p>Follow me on social media:</p>
                <div className="flex justify-center space-x-4">
                    <a href="#" className="text-gray-400 hover:text-white">LinkedIn</a>
                    <a href="#" className="text-gray-400 hover:text-white">GitHub</a>
                    <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;