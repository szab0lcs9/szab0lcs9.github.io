import { motion } from "framer-motion";

const Background = () => {
    return (
        <>
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
        </>
    );
}

export default Background;