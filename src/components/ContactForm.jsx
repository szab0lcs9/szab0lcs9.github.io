const ContactForm = () => {

    const submitForm = () => {
        console.log("Form submitted");
    }

    return (
        <div className="w-full md:w-200 bg-0 p-10">
            <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
            <p className="mb-4">Feel free to reach out to me via email or connect with me on LinkedIn!</p>
            <form className="bg-0">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input type="text" id="name" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500" />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" id="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500" />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea id="message" rows="4" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500"></textarea>
                </div>
                <button type="submit" 
                        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" 
                        onClick={() => submitForm()}>Send Message</button>
            </form>
        </div>
    );
};

export default ContactForm;