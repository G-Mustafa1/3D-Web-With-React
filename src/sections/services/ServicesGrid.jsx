import React from 'react'
import { motion } from 'framer-motion'
import AnimatedSection from '../../components/AnimatedSection';

const ServicesGrid = () => {
    const items = [
        { title: "3D Hero Scenes", desc: "Cinematic real-time hero scenes for conversions." },
        { title: "Product Configurators", desc: "Color, parts and options with live preview." },
        { title: "Interactive Tours", desc: "Guided experiences with camera cues and narration." },
        { title: "AR/Embed", desc: "Export for AR viewers and social embeds." },
        { title: "Performance Audits", desc: "Site speed, GLB, textures and LCP optimizations." },
        { title: "Maintenance", desc: "Documentation, training, and support SLAs." }
    ];
    return (
        <AnimatedSection delay={0.12}>
            <section className="py-24 bg-[rgba(255,255,255,0.02)] text-muted">
                <div className="container">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1,}}
                        className="text-3xl font-bold mb-6">Services — Detailed</motion.h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {items.map((it, i) => (
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                key={i} className="p-8 section-card transition duration-800 delay-75 ease-in-out hover:-translate-y-1.5 hover:scale-102">
                                <h3 className="text-xl font-semibold">{it.title}</h3>
                                <p className="text-gray-300 mt-4">{it.desc}</p>
                                <div className="mt-6 text-sm text-gray-400">Includes scoping, delivery, and post-launch support.</div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mt-16 section-card tect-muted transition duration-800 delay-75 ease-in-out hover:-translate-y-1.5 hover:scale-102">
                        <h3 className="text-xl font-semibold">Custom Solutions</h3>
                        <p className="text-gray-300 mt-4 text-md">We can craft unique interactions tailored to your product and UX goals — contact for a scoping call.</p>
                    </motion.div>
                </div>
            </section>
        </AnimatedSection>
    )
}

export default ServicesGrid
