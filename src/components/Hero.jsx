import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Gradient & Shapes */}
            <div className="absolute inset-0 bg-finance-navy bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-finance-lightNavy via-finance-navy to-black"></div>

            {/* Floating Elements */}
            <motion.div
                animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 left-1/4 w-64 h-64 bg-finance-gold/10 rounded-full blur-3xl"
            />
            <motion.div
                animate={{ y: [0, 30, 0], opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-finance-emerald/10 rounded-full blur-3xl"
            />

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <img src="/logo.png" alt="Logo" className="h-24 md:h-32 mx-auto mb-8 drop-shadow-2xl animate-float" />
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight"
                >
                    Navigating the <span className="text-transparent bg-clip-text bg-gradient-to-r from-finance-gold to-yellow-200">Future</span> of Finance
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto"
                >
                    Join us at FinExplorer to discover commerce pathways, connect with experts, and shape your professional journey.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col md:flex-row gap-4 justify-center"
                >
                    <button className="group bg-finance-gold text-finance-navy px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 transition-all flex items-center justify-center gap-2 shadow-lg shadow-yellow-500/25">
                        Register Now
                        <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="px-8 py-4 rounded-full font-bold text-lg border border-white/20 hover:bg-white/10 transition-all backdrop-blur-sm">
                        Learn More
                    </button>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 1, duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-400"
            >
                <ChevronDown size={32} />
            </motion.div>
        </section>
    );
};

export default Hero;
