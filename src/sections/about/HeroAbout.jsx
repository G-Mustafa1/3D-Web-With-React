import React from "react";
import ThreeCanvas from "../../components/ThreeCanvas";
import AnimatedSection from "../../components/AnimatedSection";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function HeroAbout() {
  return (
    <AnimatedSection delay={0.05}>
      <section className="relative min-h-[85vh] mt-0 flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-35"
        >
          <source src="/video/about.mp4" type="video/mp4" />
        </video>

        <div className="container mx-auto relative z-10 grid lg:grid-cols-2 gap-8 md:py-5 py-10 px-6 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-4xl md:text-5xl font-extrabold">
              About <span className="text-[var(--accent)] drop-shadow-[0_0_10px_var(--accent)]">My3DStudio</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-gray-300 mt-6 md:text-xl text-lg">
              We are a creative team of designers and engineers, dedicated to
              building <span className="text-[var(--accent)] font-semibold">interactive 3D web experiences</span> that blend innovation,
              performance, and design excellence.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-10">
              <Link to="/services" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg transform hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                Our Services
              </Link>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex justify-center items-center md:justify-end">
            <div className="h-96 md:w-[480px] md:h-[400px] rounded-xl overflow-hidden md:ml-10 ml-0">
              <ThreeCanvas />
            </div>
          </motion.div>
        </div>
      </section>
    </AnimatedSection>
  );
}

export default HeroAbout;
