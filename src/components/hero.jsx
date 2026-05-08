import React from "react";
import { motion } from "framer-motion";
import headerImg from "../img/Producten.jpg";

const Hero = () => {
    return (
        <header 
            className="relative h-[80vh] min-h-125 w-full bg-cover bg-center flex items-center justify-center"
            style={{ 
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${headerImg})` 
            }}
        >
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center px-4"
            >
                <img 
                    src="logo-white.svg" 
                    className="h-32 md:h-48 mx-auto mb-6" 
                    alt="Ezudea Logo" 
                />
                <p className="text-xl md:text-3xl font-light tracking-wide uppercase text-text-primary">
                    Erkende Italiaanse invoerder
                </p>
            </motion.div>
        </header>
    );
}

export default Hero;
