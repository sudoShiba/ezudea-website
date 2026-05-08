import React from "react";
import { motion } from "framer-motion";
import data from "../productData.json";

const Award = ({ item }) => {
    const DisplayData = data[item];
    if (!DisplayData || !DisplayData.award) return null;

    return (
        <motion.article 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-3xl p-6 m-4 flex items-center justify-center shadow-sm hover:shadow-xl transition-shadow duration-300 group"
        >
            <img 
                src={DisplayData.award} 
                alt={DisplayData.title}
                className="max-h-75 w-auto object-contain transition-transform duration-500 group-hover:brightness-105"
            />
        </motion.article>
    );
};

export default Award;
