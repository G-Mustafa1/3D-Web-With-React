import React from "react";
import { motion } from "framer-motion";

export default function AnimatedSection({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.995 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.8, delay, ease: [0.2,0.8,0.2,1] }}
      className="will-change-transform"
    >
      {children}
    </motion.div>
  );
}

