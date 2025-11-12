import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import AnimatedSection from '../../components/AnimatedSection'

const CTA = () => {
    return (
        <AnimatedSection>
            <section className="mx-6 md:mx-0">
                <div className="container">
                    <div className='section-card p-6 transition duration-800 delay-75 ease-in-out hover:-translate-y-1.5 hover:scale-102
                    flex justify-center flex-col items-center gap-1.5'>
                        <motion.h3
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="text-3xl font-bold text-white mt-6">Ready to build your 3D experience?</motion.h3>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-gray-200 max-w-2xl mt-4">Book a free consult — scope, timeline and next steps.</motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="my-6"><Link to="/contact" className="px-6 py-3 bg-[var(--primary)] rounded-lg text-white font-semibold hover:bg-[var(--accent)]">Book a Call</Link>
                        </motion.div>
                    </div>
                </div>
            </section>
        </AnimatedSection>
    )
}

export default CTA