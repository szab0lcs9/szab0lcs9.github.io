export default function Projects() {
    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-3xl font-bold mb-4">Projects</h2>
                <p className="text-gray-700 mb-4">Here are some of my projects:</p>
                <ul className="list-disc list-inside space-y-2">
                    <li className="text-blue-600 hover:underline"><a href="#">Project 1</a></li>
                    <li className="text-blue-600 hover:underline"><a href="#">Project 2</a></li>
                    <li className="text-blue-600 hover:underline"><a href="#">Project 3</a></li>
                </ul>
            </div>
        </div>
    );
}