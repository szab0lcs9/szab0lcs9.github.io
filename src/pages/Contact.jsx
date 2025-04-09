import Background from "../components/Background";
import Navbar from "../components/Navbar";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

export default function Contact() {
    return (
        <div className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-gray-300 flex flex-col items-center overflow-hidden">
            <Background />
            <Navbar />
            <ContactForm />
            <Footer />
        </div>
    );
    
}