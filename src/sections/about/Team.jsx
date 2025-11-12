import React from "react";
import AnimatedSection from "../../components/AnimatedSection";
import { motion } from "framer-motion";
import { div, h1 } from "framer-motion/client";

function Team() {
  const members = [
    { name: "Muhammad Ali", role: "Lead Designer", bio: "Motion & visual systems." },
    { name: "Ghulam Mustafa", role: "Lead Engineer", bio: "R3F & performance." },
    { name: "Suliman", role: "Product Manager", bio: "Delivery & client success." }
  ];
  return (
    <AnimatedSection delay={0.24}>
      <section className="py-20">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, }}
            className="text-3xl font-semibold mb-6">Team</motion.h2>
          <div className="grid md:grid-cols-3 gap-6">
            {members.map((m, i) => (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                key={i} className="section-card text-center p-6 transition duration-800 delay-75 ease-in-out hover:-translate-y-1.5 hover:scale-102"
              >
                <div className="h-28 w-28 rounded-full mx-auto bg-white/6 flex items-center justify-center text-primary font-bold text-xl">{m.name[0]}</div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, }}
                  className="mt-4 font-semibold">{m.name}</motion.h2>
                <div className="text-muted">{m.role}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
export default Team

// transition duration-800 delay-75 ease-in-out hover:-translate-y-1.5 hover:scale-102

// p-6 transition delay-300 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110


{/* <div className="grid md:grid-cols-3 gap-6">
  {members.map((m, i) => (
    <motion.div
      key={i}
      className="section-card text-center p-6 rounded-2xl bg-[rgba(255,255,255,0.05)] border border-white/10 backdrop-blur-sm 
                 transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:scale-105 
                 hover:shadow-[0_0_25px_rgba(255,255,255,0.15)] hover:border-white/20"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.2 }}
      whileHover={{ scale: 1.05 }}
    >
      <motion.div
        className="h-28 w-28 rounded-full mx-auto bg-white/10 flex items-center justify-center text-primary font-bold text-2xl
                   transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:bg-primary hover:text-white"
        whileHover={{ scale: 1.1 }}
      >
        {m.name[0]}
      </motion.div>
      <h4 className="mt-4 font-semibold text-lg">{m.name}</h4>
      <div className="text-muted">{m.role}</div>
    </motion.div>
  ))}
</div> */}
