import React from "react";
import ThreeCanvas from "../../components/ThreeCanvas";
import AnimatedSection from "../../components/AnimatedSection";
import video from "../../../public/video/hero.mp4";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <AnimatedSection delay={0.05}>
      <section
        id="home"
        className="relative min-h-[85vh] flex items-center justify-center overflow-hidden text-white"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        >
          <source src={video} type="video/mp4" />
        </video>
        <div className="relative z-10 container mx-auto px-6 py-10 md:py-5 grid lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-4xl md:text-5xl font-extrabold leading-tight">
              We craft{" "}
              <span className="text-[var(--accent)] drop-shadow-[0_0_10px_var(--accent)]">
                interactive 3D
              </span>{" "}
              experiences for brands & products
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mt-6 text-gray-300 text-lg md:text-xl max-w-xl leading-relaxed font-semibold">
              Performance-first, <span className="text-[var(--accent)]"> production-ready 3D websites </span> — immersive
              landing pages, product configurators, and interactive brand
              storytelling.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-10 flex flex-wrap gap-5">
              <Link
                to="/services"
                className="bg-blue-500 hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] hover:scale-105 transition-all duration-300 px-6 py-3 rounded-lg font-semibold"
              >
                View Services
              </Link>
              <Link
                to="/contact"
                className="border border-white/50 px-6 py-3 rounded-lg hover:bg-[var(--accent)] hover:scale-105 transition-all duration-300"
              >
                Contact Us
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative flex justify-center items-center md:justify-end"
          >
            <div className="h-96 md:w-[480px] md:h-[480px] rounded-2xl overflow-hidden">
              <ThreeCanvas />
            </div>
          </motion.div>
        </div>
      </section>
    </AnimatedSection>
  );
}

export default Hero;