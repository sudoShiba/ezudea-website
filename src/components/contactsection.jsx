import React, { useState } from "react";
import { motion } from "framer-motion";
import { IconSend, IconCheck, IconMail, IconPhone } from "@tabler/icons-react";

const ContactSection = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    
    // Dynamically set the subject with the name from the form
    const name = data.get("name");
    data.set("subject", `Nieuw bericht van Ezudea website: ${name}`);
    
    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data).toString(),
      });
      
      if (response.ok) {
        setStatus("SUCCESS");
        form.reset();
      } else {
        setStatus("ERROR");
      }
    } catch (error) {
      setStatus("ERROR");
    }
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-24" id="contact">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* Left Side: Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Laten we praten.</h2>
            <p className="text-xl text-text-secondary leading-relaxed max-w-md">
              Heeft u vragen over onze producten of wilt u een bestelling plaatsen? Neem gerust contact met ons op.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start gap-6 group">
              <div className="p-4 bg-brand-green/10 rounded-2xl text-brand-green group-hover:bg-brand-green group-hover:text-text-primary transition-all duration-300">
                <IconMail size={28} stroke={1.5} />
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-widest font-bold text-text-secondary mb-1">Email ons</h4>
                <a href="mailto:info@ezudea.com" className="text-xl font-medium hover:text-text-link-hover transition-colors underline underline-offset-4 decoration-brand-green/30">
                  info@ezudea.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="p-4 bg-brand-green/10 rounded-2xl text-brand-green group-hover:bg-brand-green group-hover:text-text-primary transition-all duration-300">
                <IconPhone size={28} stroke={1.5} />
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-widest font-bold text-text-secondary mb-1">Bel ons</h4>
                <a href="tel:+32 478 52 06 20" className="text-xl font-medium hover:text-text-link-hover transition-colors underline underline-offset-4 decoration-brand-green/30">
                  +32 478 52 06 20
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white/5 p-8 md:p-10 rounded-[3rem] border border-white/10 shadow-2xl backdrop-blur-md relative overflow-hidden"
        >
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand-green/20 blur-[100px] rounded-full"></div>
          
          <form 
            name="contact" 
            method="POST" 
            data-netlify="true"
            onSubmit={handleSubmit}
            className="relative z-10 space-y-6"
          >
            {/* Netlify hidden inputs */}
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="subject" />

            <div className="space-y-2">
              <label htmlFor="name" className="text-xs uppercase tracking-widest font-bold text-text-secondary ml-1">Naam</label>
              <input
                required type="text" name="name" id="name" placeholder="Uw naam"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-text-primary placeholder:text-text-secondary/40 focus:outline-none focus:border-brand-green focus:bg-white/8 transition-all"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-xs uppercase tracking-widest font-bold text-text-secondary ml-1">Email</label>
              <input
                required type="email" name="email" id="email" placeholder="uw@email.com"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-text-primary placeholder:text-text-secondary/40 focus:outline-none focus:border-brand-green focus:bg-white/8 transition-all"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-xs uppercase tracking-widest font-bold text-text-secondary ml-1">Bericht</label>
              <textarea
                required name="message" id="message" rows="4" placeholder="Hoe kunnen we u helpen?"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-text-primary placeholder:text-text-secondary/40 focus:outline-none focus:border-brand-green focus:bg-white/8 transition-all resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === "SUCCESS"}
              className={`w-full py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all duration-300 ${
                status === "SUCCESS" 
                  ? "bg-brand-accent text-text-primary" 
                  : "bg-brand-green text-text-primary hover:bg-brand-green-dark hover:shadow-lg hover:shadow-brand-green/20"
              }`}
            >
              {status === "SUCCESS" ? (
                <>
                  <IconCheck size={24} />
                  Verzonden!
                </>
              ) : (
                <>
                  <IconSend size={24} />
                  Verstuur bericht
                </>
              )}
            </button>

            {status === "ERROR" && (
              <p className="text-red-400 text-center text-sm font-medium animate-pulse pt-2">
                Oeps! Er ging iets mis. Probeer het later opnieuw.
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
