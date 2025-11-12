import React from 'react'
import AnimatedSection from '../../components/AnimatedSection';
import { motion } from 'framer-motion';

const Timeline = () => {
    const milestones = [
        { year: "2018", title: "Founded", desc: "Started building experimental 3D demos." },
        { year: "2019", title: "First Client", desc: "Launched first commercial interactive landing." },
        { year: "2021", title: "Growth", desc: "Scaled team and established process." },
        { year: "2024", title: "Mature", desc: "Optimized workflows for production GLB delivery." }
    ];
    return (
        <AnimatedSection delay={0.12}>
            <section className="py-24 bg-[rgba(255,255,255,0.02)] text-muted">
                <div className="container">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-3xl font-bold mb-6">Timeline</motion.h2>
                    <div className="space-y-6">
                        {milestones.map((m, i) => (
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                key={i} className="p-6 section-card transition duration-800 delay-75 ease-in-out hover:-translate-y-1.5 hover:scale-102">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="font-semibold">{m.title}</h3>
                                        <p className="text-gray-300 mt-2">{m.desc}</p>
                                    </div>
                                    <div className="text-gray-400 font-mono">{m.year}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </AnimatedSection>
    )
}

export default Timeline
