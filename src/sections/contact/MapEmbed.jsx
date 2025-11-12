import React from 'react'
import { motion } from 'framer-motion'

const MapEmbed = () => {
    return (
        <section className="py-24 bg-gray-900/5">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, }}
                    className="text-3xl font-bold mb-6">Our Location</motion.h2>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full aspect-video rounded overflow-hidden border border-gray-800">
                    <iframe title="office map" src="https://maps.google.com/maps?q=karachi&t=&z=13&ie=UTF8&iwloc=&output=embed" className="w-full h-full" />
                </motion.div>
            </div>
        </section>
    )
}

export default MapEmbed
