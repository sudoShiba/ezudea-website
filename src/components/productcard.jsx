import React from "react";
import { motion } from "framer-motion";
import data from "../productData.json";

const ProductCard = ({ item, variant = "standard" }) => {
  const DisplayData = data[item];
  if (!DisplayData) return null;

  // Variants:
  // "standard" - Side by side image/text (MD+)
  // "small"    - Compact, horizontal (always)
  // "large"    - Large, full width with dual descriptions

  if (variant === "small") {
    return (
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ y: -5, scale: 1.02 }}
        className="bg-brand-green text-text-primary rounded-2xl p-5 m-2 flex items-center space-x-6 group"
      >
        <img
          src={DisplayData.imgsrc}
          alt={DisplayData.title}
          className="h-32 object-contain transition-transform group-hover:rotate-3 duration-300"
        />
        <div className="flex-1">
          <h2 className="text-lg font-bold mb-2 leading-tight">{DisplayData.title}</h2>
          <div className="grid grid-cols-1 gap-2">
            <section>
              <h4 className="text-[10px] uppercase tracking-widest font-bold text-text-secondary">Regio</h4>
              <p className="text-xs font-medium">{DisplayData.afkomst}</p>
            </section>
            <section>
              <h4 className="text-[10px] uppercase tracking-widest font-bold text-text-secondary">
                Formaten
              </h4>
              <p className="text-xs font-medium">{DisplayData.formaten}</p>
            </section>
          </div>
        </div>
      </motion.article>
    );
  }

  if (variant === "large") {
    return (
      <motion.article
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.2)" }}
        className="bg-brand-green text-text-primary rounded-3xl p-8 m-4 lg:col-span-2 grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] xl:grid-cols-[400px_1fr] gap-12 group items-center"
      >
        <div className="flex items-center justify-center p-4 min-h-100">
          <img
            src={DisplayData.imgsrc}
            alt={DisplayData.title}
            className="max-h-125 w-auto rounded-4xl object-contain transition-transform group-hover:scale-105 duration-700 shadow-xl"
          />
        </div>
        <div className="flex flex-col justify-center text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 border-b border-white/20 pb-4">
            {DisplayData.title}
          </h2>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 mb-10">
            <section className="bg-white/10 p-5 rounded-xl">
              <h3 className="text-xl font-bold mb-3">{DisplayData.title1}</h3>
              <p className="text-sm md:text-base text-text-primary opacity-90 leading-relaxed">
                {DisplayData.description1}
              </p>
            </section>
            <section className="bg-white/10 p-5 rounded-xl">
              <h3 className="text-xl font-bold mb-3">{DisplayData.title2}</h3>
              <p className="text-sm md:text-base text-text-primary opacity-90 leading-relaxed">
                {DisplayData.description2}
              </p>
            </section>
          </div>
          <div className="flex flex-wrap gap-x-12 gap-y-6 pt-6 border-t border-white/20">
            <section>
              <h4 className="text-xs uppercase tracking-wider font-semibold text-text-secondary">
                Regio van afkomst
              </h4>
              <p className="text-lg font-bold">{DisplayData.afkomst}</p>
            </section>
            <section>
              <h4 className="text-xs uppercase tracking-wider font-semibold text-text-secondary">
                Producent
              </h4>
              <p className="text-lg font-bold">{DisplayData.producent}</p>
            </section>
            {DisplayData.url && (
              <section>
                <h4 className="text-xs uppercase tracking-wider font-semibold text-text-secondary">
                  Website
                </h4>
                <a
                  href={DisplayData.url}
                  rel="noreferrer"
                  target="_blank"
                  className="text-lg font-bold underline hover:text-text-link-hover transition-colors block break-all"
                >
                  {DisplayData.url.replace(/^https?:\/\//, "")}
                </a>
              </section>
            )}
          </div>
        </div>
      </motion.article>
    );
  }

  // Standard variant
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
      className="bg-brand-green text-text-primary rounded-3xl p-6 m-4 grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-8 group items-center"
    >
      <div className="flex items-center justify-center p-4">
        <img
          src={DisplayData.imgsrc}
          alt={DisplayData.title}
          className="max-h-80 w-auto object-contain transition-transform group-hover:scale-105 duration-500"
        />
      </div>
      <div className="flex flex-col justify-center text-left">
        <h2 className="text-2xl font-bold mb-4 leading-tight">{DisplayData.title}</h2>
        <div className="space-y-4">
          <section>
            <h3 className="text-sm uppercase tracking-wider font-semibold text-text-secondary">
              Over dit product
            </h3>
            <p className="text-sm md:text-base leading-relaxed">{DisplayData.description}</p>
          </section>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <section>
              <h4 className="text-xs uppercase tracking-wider font-semibold text-text-secondary">Regio</h4>
              <p className="text-sm font-medium">{DisplayData.afkomst}</p>
            </section>
            <section>
              <h4 className="text-xs uppercase tracking-wider font-semibold text-text-secondary">
                Producent
              </h4>
              <p className="text-sm font-medium">{DisplayData.producent}</p>
            </section>
          </div>
          {DisplayData.url && (
            <section>
              <h4 className="text-xs uppercase tracking-wider font-semibold text-text-secondary">Website</h4>
              <a
                href={DisplayData.url}
                rel="noreferrer"
                target="_blank"
                className="text-sm underline hover:text-text-link-hover transition-colors break-all"
              >
                {DisplayData.url.replace(/^https?:\/\//, "")}
              </a>
            </section>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default ProductCard;
