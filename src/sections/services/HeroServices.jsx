import React from "react";
import ThreeCanvas from "../../components/ThreeCanvas";
import AnimatedSection from "../../components/AnimatedSection";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HeroServices = () => {
    return (
        <AnimatedSection delay={0.12}>
            <section className="relative min-h-[85vh] flex items-center overflow-hidden">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-30"
                >
                    <source
                    src="/video/service.mp4"
                    type="video/mp4"
                    />
                </video>

                {/* <div className="absolute inset-0 bg-black/20"></div> */}

                <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-12 px-6 py-10 md:py-5">
                    <div>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            className="text-4xl md:text-5xl font-extrabold text-white leading-tight drop-shadow-md">
                            Our <span className="text-[var(--accent)] drop-shadow-[0_0_10px_var(--accent)]">3D Web Services</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="text-gray-300 mt-5 md:text-xl text-lg max-w-xl lg:mx-0 leading-relaxed">
                            We handle everything from{" "}
                            <span className="text-[var(--accent)] font-semibold">
                                3D design
                            </span>
                            , animation, and asset production to{" "}
                            <span className="text-[var(--accent)] font-semibold">
                                full-stack development
                            </span>
                            — creating immersive and interactive experiences that perform
                            beautifully on every device.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="mt-8">
                            <Link
                                to="/contact"
                                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg transform hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.5)]"
                            >
                                Start Your Project
                            </Link>
                        </motion.div>
                    </div>

                    {/* 🌀 3D Canvas Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex justify-center lg:justify-end">
                        <div className="w-full h-80 sm:h-96  md:h-[420px] lg:h-[460px] rounded-xl overflow-hidden shadow-2xl">
                            <ThreeCanvas autoRotate={true} />
                        </div>
                    </motion.div>
                </div>
            </section>
        </AnimatedSection>
    );
};

export default HeroServices;
