import React from "react";
import { motion } from "framer-motion";
import AnimatedSection from "../../components/AnimatedSection";
import { Link } from "react-router-dom";

const HeroContact = ({ screllForm }) => {
  console.log(screllForm);
  
  return (
    <AnimatedSection delay={0.1}>
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden text-white">
        
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        >
            <source src="/video/contact.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        {/* <div className="absolute inset-0 bg-black/50"></div> */}

        {/* Content */}
        <div className="container relative z-10 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-5xl font-extrabold leading-tight"
          >
            Let’s{" "}
            <span className="bg-clip-text text-transparent bg-[var(--accent)] drop-shadow-[0_0_10px_var(--accent)]">
              Build
            </span>{" "}
            Something Great Together
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-gray-300 mt-6 max-w-xl mx-auto text-lg md:text-xl"
          >
            Got a question, idea, or project in mind? We’d love to hear from you.
            Fill out the form below or reach us through social links — our team will
            get back to you within one business day.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-10 flex flex-wrap justify-center gap-5"
          >
            <button
              onClick={screllForm}
              className="bg-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] text-white font-semibold px-8 py-3 rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Contact Form
            </button>
            <Link
              to="/services"
              className="border border-white/60 text-white font-semibold px-8 py-3 rounded-lg hover:bg-[var(--accent)] transform hover:scale-105 transition-all duration-300"
            >
              View Our Services
            </Link>
          </motion.div>
        </div>

        {/* Glows */}
        <div className="absolute top-20 left-10 w-40 h-40 bg-primary/20 blur-[100px] rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-10 w-56 h-56 bg-blue-500/20 blur-[120px] rounded-full animate-pulse-slow"></div>
      </section>
    </AnimatedSection>
  );
};

export default HeroContact;
