import React from 'react'
import AnimatedCounter from '../../components/AnimatedCounter'
import { motion } from 'framer-motion'

const FunFact = () => {
    return (
        <section className="py-24">
            <div className="container">
                <h2 className="text-3xl font-bold mb-6">Numbers</h2>
                <div className="grid md:grid-cols-4 gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="p-6 section-card text-center transition duration-800 delay-75 ease-in-out hover:-translate-y-1.5 hover:scale-102">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, }}
                            className="text-4xl font-bold"><AnimatedCounter from={0} to={120} duration={1800} />+</motion.div>
                        <div className="text-gray-300 mt-2">Projects</div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="p-6 section-card text-center transition duration-800 delay-75 ease-in-out hover:-translate-y-1.5 hover:scale-102">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, }}
                            className="text-4xl font-bold"><AnimatedCounter from={0} to={45} duration={1800} />+</motion.div>
                        <div className="text-gray-300 mt-2">Clients</div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="p-6 section-card text-center transition duration-800 delay-75 ease-in-out hover:-translate-y-1.5 hover:scale-102">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, }}
                            className="text-4xl font-bold"><AnimatedCounter from={0} to={8} duration={1800} /></motion.div>
                        <div className="text-gray-300 mt-2">Years</div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="p-6 section-card text-center transition duration-800 delay-75 ease-in-out hover:-translate-y-1.5 hover:scale-102">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, }}
                            className="text-4xl font-bold"><AnimatedCounter from={0} to={98} duration={1800} />%</motion.div>
                        <div className="text-gray-300 mt-2">Satisfaction</div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default FunFact
