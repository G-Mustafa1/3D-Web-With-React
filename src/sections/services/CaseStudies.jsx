import React from 'react'
import AnimatedSection from '../../components/AnimatedSection'
import { motion } from 'framer-motion'

const CaseStudies = () => {
    return (
        <AnimatedSection delay={0.22}>
            <section className="py-20 text-muted">
                <div className="container">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, }}
                        className="text-3xl font-bold mb-6">Case Studies</motion.h2>
                    <div className="space-y-9">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="section-card transition duration-800 delay-75 ease-in-out hover:-translate-y-1.5 hover:scale-102">
                            <h3 className="text-xl font-semibold">Configurator for Brand Z</h3>
                            <p className="text-gray-300 mt-3 text-md">Real-time color swaps, price updates and export — integrated with e-commerce checkout.</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y1: 30 }}
                            whileInView={{ opacity: 1, y1: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="section-card transition duration-800 delay-75 ease-in-out hover:-translate-y-1.5 hover:scale-102">
                            <h3 className="text-xl font-semibold">Interactive Tour for SaaS</h3>
                            <p className="text-gray-300 mt-3 text-md">Guided flow with camera keyframes and annotated hotspots to educate new users.</p>
                        </motion.div>
                    </div>
                </div>
            </section>
        </AnimatedSection>
    )
}

export default CaseStudies
