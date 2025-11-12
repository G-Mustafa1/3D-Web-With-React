import React from 'react'
import { motion } from 'framer-motion'
import AnimatedSection from '../../components/AnimatedSection';
const Features = () => {

    const items = [
        { title: "Interactive Demos", desc: "Hotspots, camera cues, and product highlights to tell the story." },
        { title: "Configurator", desc: "Real-time options, color and part swaps with immediate preview." },
        { title: "Story-driven Sections", desc: "Long narrative sections, context, and conversion points." },
        { title: "Performance", desc: "GLB optimization, KTX2 textures, streaming LODs." },
        { title: "Accessibility", desc: "Fallbacks, ARIA labels and keyboard navigation." },
        { title: "Analytics", desc: "Engagement tracking and A/B-friendly hooks." }
    ];

    return (
        <AnimatedSection delay={0.12}>
            <section className="py-20">
                <div className="container">
                    <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-3xl font-bold mb-4">Deep Features</motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-muted mb-8 max-w-3xl">We build full experiences, not just pretty scenes. Each feature is engineered for real world use and maintenance.</motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="grid md:grid-cols-3 gap-6 ">
                        {items.map((it, i) => (
                            <div
                                key={i} className="section-card p-6 transition duration-800 delay-75 ease-in-out hover:-translate-y-1.5 hover:scale-102 ">
                                <h3 className="text-xl font-semibold">{it.title}</h3>
                                <p className="text-gray-300 mt-3">{it.desc}</p>
                            </div>
                        ))}
                    </motion.div>

                    <motion.div className="mt-16 section-card transition duration-800 delay-75 ease-in-out hover:-translate-y-1.5 hover:scale-102"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}>
                        <h3 className="text-2xl font-semibold">Engineering Details</h3>
                        <p className="text-gray-300 mt-4 leading-relaxed">
                            We treat each 3D scene like a product — code organized, lazy-loaded, with clear contract between designer and developer.
                            We use draco compression, KTX2 textures, and adaptive LODs to keep mobile experiences fast.
                        </p>
                    </motion.div>
                </div>
            </section>
        </AnimatedSection>
    )
}

export default Features