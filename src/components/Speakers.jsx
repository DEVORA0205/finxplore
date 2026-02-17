import React from 'react';
import { motion } from 'framer-motion';
import { User, Linkedin, Twitter } from 'lucide-react';

const Speakers = () => {
    const speakers = [
        {
            name: "Dr. Rajesh Sharma",
            role: "Financial Analyst & Author",
            company: "MarketInsights",
            bio: "20+ years in equity research and portfolio management."
        },
        {
            name: "Ms. Priya Patel",
            role: "Chartered Accountant",
            company: "Deloitte",
            bio: "Expert in taxation and corporate auditing standards."
        },
        {
            name: "Mr. Amit Verma",
            role: "Investment Banker",
            company: "JP Morgan",
            bio: "Specializes in M&A and capital markets strategies."
        },
        {
            name: "Prof. Sneha Gupta",
            role: "Academic Director",
            company: "HL College",
            bio: "Leading research in behavioral finance and economics."
        }
    ];

    return (
        <section id="speakers" className="py-24 bg-finance-navy relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Distinguished <span className="text-finance-gold">Speakers</span></h2>
                    <p className="text-gray-400">Learn from the visionaries shaping the industry.</p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {speakers.map((speaker, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ y: -10 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer"
                        >
                            {/* Image Placeholder */}
                            <div className="absolute inset-0 bg-finance-lightNavy flex items-center justify-center group-hover:bg-finance-navy transition-colors duration-500">
                                <User size={64} className="text-finance-gold opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>

                            {/* Overlay Content */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <h3 className="text-xl font-bold text-white mb-1">{speaker.name}</h3>
                                <p className="text-finance-gold text-sm font-semibold mb-2">{speaker.role}</p>
                                <p className="text-gray-300 text-xs mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                    {speaker.bio}
                                </p>
                                <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                                    <Linkedin size={18} className="text-gray-400 hover:text-white" />
                                    <Twitter size={18} className="text-gray-400 hover:text-white" />
                                </div>
                            </div>

                            {/* Border Glow */}
                            <div className="absolute inset-0 border-2 border-transparent group-hover:border-finance-gold/30 rounded-2xl transition-all duration-300"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Speakers;
