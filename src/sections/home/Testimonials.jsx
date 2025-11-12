import React from 'react'
import AnimatedSection from '../../components/AnimatedSection'
import { motion } from 'framer-motion';


const Testimonials = () => {
    const testimonials = [
        { quote: "The 3D hero changed our conversion path — users engaged much longer.", name: "Ghulam Mustafa — Head of Marketing" },
        { quote: "Great performance and attention to technical detail.", name: "Muhammad Ali — CTO" },
        { quote: "Design & engineering were perfectly aligned throughout.", name: "Suliman — Product Lead" }
    ];
    return (
        <AnimatedSection delay={0.28}>
            <section className="py-20">
                <div className="container">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-3xl font-semibold mb-6">Testimonials</motion.h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {testimonials.map((t, i) => (
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                key={i} className="section-card p-6 transition duration-800 delay-75 ease-in-out hover:-translate-y-1.5 hover:scale-102">
                                <p className="text-muted italic">“{t.quote}”</p>
                                <div className="mt-4 font-semibold">{t.name}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </AnimatedSection>
    )
}

export default Testimonials

