import { Link } from "react-router-dom";
import AnimatedSection from "../../components/AnimatedSection";
import { motion } from "framer-motion";

function Pricing() {
  const plans = [
    { name: "Starter", price: "$1,200", desc: "Single hero scene" },
    { name: "Growth", price: "$3,800", desc: "Multi-section 3D + configurator" },
    { name: "Enterprise", price: "Custom", desc: "Full product suite" },
  ];

  return (
    <AnimatedSection delay={0.3}>
      <section className="py-20 bg-[rgba(255,255,255,0.02)]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl font-semibold mb-6">Pricing examples</motion.div>
          <div className="grid md:grid-cols-3 gap-6 ">
            {plans.map((p, i) => (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                key={i} className="section-card p-6 transition duration-800 delay-75 ease-in-out hover:-translate-y-1.5 hover:scale-102">
                <h3 className="font-semibold">{p.name}</h3>
                <div className="text-primary text-2xl font-bold my-4">{p.price}</div>
                <p className="text-muted">{p.desc}</p>
                <div className="mt-6"><Link to="/contact" className="bg-[var(--primary)] py-2.5 font-semibold text-white space-x-0.5 rounded-lg px-4 transition duration-500 ease-in-out hover:bg-[var(--accent)]">Request Quote</Link></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}

export default Pricing