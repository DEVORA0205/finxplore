import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const About = () => {
    const [activeFeature, setActiveFeature] = useState(0);

    const features = [
        {
            id: "01",
            title: "Structured Exploration",
            desc: "Don't just wander aimlessly. We provide a curated, expert-backed roadmap to navigate the complex world of finance, accounting, and management.",
            color: "text-finance-gold"
        },
        {
            id: "02",
            title: "Career Acceleration",
            desc: "Speed up your professional journey. Understand the precise skills, certifications, and networks needed to break into top-tier roles.",
            color: "text-finance-emerald"
        },
        {
            id: "03",
            title: "Insider Access",
            desc: "Get behind the velvet rope. Learn directly from CFOs, Bankers, and Entrepreneurs who share the unwritten rules of the industry.",
            color: "text-blue-400"
        },
        {
            id: "04",
            title: "Strategic Empowerment",
            desc: "Confidence comes from competence. Leave with a concrete plan and the decision-making framework to build your future.",
            color: "text-yellow-300"
        }
    ];

    return (
        <section id="about" className="py-32 bg-finance-navy relative overflow-hidden">
            {/* Global Noise Overlay */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>

            {/* Ambient Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-finance-emerald/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">

                <div className="flex flex-col lg:flex-row gap-20">
                    {/* Left: Sticky Narrative */}
                    <div className="lg:w-5/12">
                        <div className="sticky top-32">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-6xl md:text-7xl font-display font-medium text-white mb-8 leading-[0.9]">
                                    Beyond <br /> the <span className="italic text-finance-gold font-serif">Textbook.</span>
                                </h2>
                                <p className="text-xl text-gray-400 leading-relaxed mb-12 max-w-md font-light">
                                    Finxplore isn't just an event; it's a paradigm shift. We dismantle the traditional academic approach and rebuild it with real-world relevance.
                                </p>

                                <a href="#register" className="inline-flex items-center gap-4 text-white group">
                                    <span className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-finance-gold group-hover:border-finance-gold group-hover:text-finance-navy transition-all duration-300">
                                        <ArrowUpRight className="w-5 h-5" />
                                    </span>
                                    <span className="text-lg tracking-wide uppercase font-medium">Join the Movement</span>
                                </a>
                            </motion.div>
                        </div>
                    </div>

                    {/* Right: Editorial List */}
                    <div className="lg:w-7/12">
                        <div className="space-y-0">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    onMouseEnter={() => setActiveFeature(index)}
                                    className="group relative border-t border-white/10 py-12 md:py-16 transition-colors duration-500 hover:bg-white/[0.02]"
                                >
                                    <div className="flex flex-col md:flex-row md:items-baseline gap-6 md:gap-12 relative z-10">
                                        <span className={`text-xl font-mono ${feature.color} opacity-60 group-hover:opacity-100 transition-opacity`}>
                                            /{feature.id}
                                        </span>

                                        <div className="flex-1">
                                            <h3 className="text-3xl md:text-4xl font-display text-white mb-4 group-hover:translate-x-2 transition-transform duration-300">
                                                {feature.title}
                                            </h3>
                                            <p className="text-gray-500 text-lg leading-relaxed max-w-lg group-hover:text-gray-300 transition-colors font-light">
                                                {feature.desc}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                            <div className="border-t border-white/10"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
