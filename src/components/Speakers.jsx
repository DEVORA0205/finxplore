import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, ArrowUpRight } from 'lucide-react';

const Speakers = () => {
    const speakers = [
        {
            name: "Dr. Rajesh Sharma",
            role: "Financial Analyst",
            company: "MarketInsights",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop",
            bio: "20+ years decoding market trends.",
            color: "group-hover:text-finance-gold"
        },
        {
            name: "Ms. Priya Patel",
            role: "Ex-CFO",
            company: "Deloitte",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop",
            bio: "Taxation expert turned strategist.",
            color: "group-hover:text-finance-emerald"
        },
        {
            name: "Mr. Amit Verma",
            role: "Investment Banker",
            company: "JP Morgan",
            image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2574&auto=format&fit=crop",
            bio: "M&A specialist dealing in billions.",
            color: "group-hover:text-blue-400"
        }
    ];

    return (
        <section id="speakers" className="py-32 bg-finance-navy relative overflow-hidden">
            {/* Global Noise Overlay */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>

            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-finance-gold/5 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8"
                >
                    <div>
                        <h4 className="text-finance-gold font-bold tracking-widest uppercase text-sm mb-4">The Visionaries</h4>
                        <h2 className="text-5xl md:text-6xl font-display font-medium text-white leading-[1.1]">
                            Voices of <br /> <span className="font-serif italic text-finance-emerald">Authority.</span>
                        </h2>
                    </div>
                    <p className="text-gray-400 max-w-sm text-lg text-right md:text-left">
                        Learn from the pioneers who are redefining the financial landscape.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {speakers.map((speaker, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: index * 0.2 }}
                            className="group relative h-[500px] w-full cursor-pointer"
                        >
                            {/* Image Container */}
                            <div className="absolute inset-0 overflow-hidden rounded-2xl">
                                <div className="absolute inset-0 bg-finance-navy/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                                <img
                                    src={speaker.image}
                                    alt={speaker.name}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-100 group-hover:scale-110 transition-all duration-700 ease-in-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-finance-navy via-finance-navy/50 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
                            </div>

                            {/* Content */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <div className="flex items-center justify-between mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                        <span className={`text-sm font-bold tracking-wider uppercase ${speaker.color}`}>{speaker.company}</span>
                                        <div className="flex gap-3">
                                            <Linkedin size={18} className="text-white hover:text-finance-gold transition-colors" />
                                            <Twitter size={18} className="text-white hover:text-finance-gold transition-colors" />
                                        </div>
                                    </div>

                                    <h3 className="text-3xl font-display font-bold text-white mb-1 leading-tight">{speaker.name}</h3>
                                    <p className="text-gray-300 text-lg mb-4 font-light">{speaker.role}</p>

                                    <div className="h-px w-full bg-white/20 mb-4 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-200"></div>

                                    <p className="text-gray-400 text-sm leading-relaxed max-w-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">
                                        "{speaker.bio}"
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Speakers;
