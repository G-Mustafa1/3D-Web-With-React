import React from "react";
import AnimatedSection from "../../components/AnimatedSection";
import { motion } from "framer-motion";

function Showcase() {
  return (
    <AnimatedSection delay={0.22}>
      <section className="py-20">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, }}
            className="text-3xl font-semibold mb-6">Selected Projects</motion.h2>

          <div className="space-y-8">
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="section-card p-6 transition duration-800 delay-75 ease-in-out hover:-translate-y-1.5 hover:scale-102">
              <h3 className="font-semibold">Lumos Launch — Interactive Phone</h3>
              <p className="text-muted mt-2">Interactive 3D hero with hotspots and quick configurator. Role: design, optimization & embedding product flow.</p>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="section-card p-6 transition duration-800 delay-75 ease-in-out hover:-translate-y-1.5 hover:scale-102">
              <h3 className="font-semibold">Orbit Tour — SaaS Onboarding</h3>
              <p className="text-muted mt-2">Guided 3D tour with camera keyframes and voice instructions for new users.</p>
            </motion.article>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}

export default Showcase
