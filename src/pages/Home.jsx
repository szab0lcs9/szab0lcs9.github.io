export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
            <p className="text-lg mb-8">I am a passionate developer.</p>
            <a href="#projects" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">View Projects</a>
        </div>
    );
}