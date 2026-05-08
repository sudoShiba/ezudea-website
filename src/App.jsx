import React from "react";
import { motion } from "framer-motion";

// components
import ProductCard from "./components/productcard";
import Hero from "./components/hero";
import Footer from "./components/footer";
import Award from "./components/award";
import ContactSection from "./components/contactsection";

// css
import "./css/index.css";

function App() {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <div className="min-h-screen">
      <Hero />
      
      <main className="max-w-400 mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center tracking-tight text-text-primary"
        >
          Artikelen
        </motion.h1>
        
        <motion.section 
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-4 mb-24"
        >
          <ProductCard item="limoncello" />
          <ProductCard item="proseccobrut" />
          <ProductCard item="proseccoextradry" />
          <ProductCard item="proseccotreviso" />
          <ProductCard item="rosenoir" />
          <ProductCard item="roseblanc" />
          <ProductCard item="contenegroni" />
          <ProductCard item="contenogroni" />
          <ProductCard item="vermouth" />
          <ProductCard item="pesto" />
          <ProductCard item="politoElsirDiVenereDiBacco" variant="large" />
        </motion.section>

        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center tracking-tight text-text-primary"
        >
          Nieuw in het gamma
        </motion.h1>
        
        <motion.section 
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-24 max-w-5xl mx-auto"
        >
          <ProductCard item="salsatartufata" variant="small" />
          <ProductCard item="olioextravergine" variant="small" />
        </motion.section>

        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center tracking-tight text-text-primary"
        >
          Internationale erkenningen
        </motion.h1>
        
        <motion.section 
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <Award item="proseccoextradry" />
          <Award item="proseccobrut2" />
          <Award item="proseccobrut3" />
          <Award item="sanpiero" />
          <Award item="proseccobrut" />
          <Award item="roseblanc" />
        </motion.section>
      </main>

      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
