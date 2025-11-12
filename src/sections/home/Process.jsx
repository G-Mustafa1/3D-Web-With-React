import React from "react";
import AnimatedSection from "../../components/AnimatedSection";
import { motion } from "framer-motion"

function Process() {
  const steps = [
    { title: "Discover", text: "Goals, audience, KPIs." },
    { title: "Prototype", text: "Figma & quick 3D proof-of-concept." },
    { title: "Build", text: "React + R3F implementation & tests." },
    { title: "Optimize", text: "Compression, budgets & monitoring." }
  ];

  return (
    <AnimatedSection delay={0.18}>
      <section className="py-20 bg-[rgba(255,255,255,0.02)]">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, }}
            className="text-3xl font-semibold mb-6">Our process</motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid md:grid-cols-2 gap-6">
            {steps.map((s, i) => (
              <div key={i} className="section-card p-6 transition duration-800 delay-75 ease-in-out hover:-translate-y-1.5 hover:scale-102">
                <div className="text-primary font-bold text-lg">{i + 1}. {s.title}</div>
                <p className="text-muted mt-2">{s.text}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </AnimatedSection>
  );
}

export default Process