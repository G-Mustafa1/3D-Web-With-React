import React from 'react'
import AnimatedSection from '../../components/AnimatedSection'
import { motion } from 'framer-motion'

const Story = () => {
    return (
        <AnimatedSection delay={0.12}>
            <section className="py-20 bg-[rgba(255,255,255,0.02)] text-muted">
                <div className="container">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-3xl font-bold mb-6">Our Story</motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="text-gray-300 leading-relaxed max-w-4xl">
                        Founded by product designers and engineers, My3DStudio started as an experiment to bring immersive visuals to product marketing.
                        Over time we refined patterns, performance techniques and a repeatable process to deliver production-grade 3D websites.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mt-10 grid md:grid-cols-2 gap-8">
                        <div className="section-card transition duration-800 delay-75 ease-in-out hover:-translate-y-1.5 hover:scale-102">
                            <h3 className="font-semibold">Vision</h3>
                            <p className="text-gray-300 mt-2">Make 3D accessible and fast on the web while keeping great UX.</p>
                        </div>
                        <div className="section-card transition duration-800 delay-75 ease-in-out hover:-translate-y-1.5 hover:scale-102">
                            <h3 className="font-semibold">Approach</h3>
                            <p className="text-gray-300 mt-2">Design-first prototypes, then engineering with measurable KPIs.</p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </AnimatedSection>
    )
}

export default Story
