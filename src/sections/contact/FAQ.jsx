import React from 'react'
import { motion } from 'framer-motion'

const FAQ = () => {
    return (
        <section className="py-24">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, }}
                    className="text-3xl font-bold mb-6">FAQ</motion.h2>
                <div className="space-y-4">
                    <motion.details
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="p-6 section-card transition duration-800 delay-75 ease-in-out hover:-translate-y-1.5 hover:scale-102">
                        <summary className="font-semibold cursor-pointer">How long does a project take?</summary>
                        <p className="mt-3 text-gray-300">Simple hero: 1–2 weeks. Full product: 3–8 weeks.</p>
                    </motion.details>
                    <motion.details
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="p-6 section-card transition duration-800 delay-75 ease-in-out hover:-translate-y-1.5 hover:scale-102">
                        <summary className="font-semibold cursor-pointer">What are your payment terms?</summary>
                        <p className="mt-3 text-gray-300">Typically 50% upfront, remainder on delivery or milestones.</p>
                    </motion.details>
                    <motion.details
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="p-6 section-card transition duration-800 delay-75 ease-in-out hover:-translate-y-1.5 hover:scale-102">
                        <summary className="font-semibold cursor-pointer">Do you produce 3D models?</summary>
                        <p className="mt-3 text-gray-300">Yes — we can create or optimize Blender models for web.</p>
                    </motion.details>
                </div>
            </div>
        </section>
    )
}

export default FAQ
