import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, TrendingUp, Users, Lightbulb } from 'lucide-react';

const About = () => {
    const features = [
        {
            icon: <BookOpen className="w-8 h-8 text-finance-gold" />,
            title: "Structured Exploration",
            desc: "Gain clarity about professional pathways in finance, accounting, and management through expert-led sessions."
        },
        {
            icon: <TrendingUp className="w-8 h-8 text-finance-emerald" />,
            title: "Career Growth",
            desc: "Understand the diverse opportunities available in the commerce field and how to navigate them."
        },
        {
            icon: <Users className="w-8 h-8 text-blue-400" />,
            title: "Expert Insights",
            desc: "Learn directly from industry leaders and successful professionals who have walked the path."
        },
        {
            icon: <Lightbulb className="w-8 h-8 text-yellow-300" />,
            title: "Empowerment",
            desc: "Make informed, confident decisions about your future with the knowledge gained here."
        }
    ];

    return (
        <section id="about" className="py-24 relative bg-finance-lightNavy/50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">About <span className="text-finance-gold">FinExplorer</span></h2>
                    <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
                        FinExplorer is an initiative by <span className="font-semibold text-white">HL College of Commerce</span> designed to help commerce students explore and understand diverse career opportunities. It is a focused platform where students can gain clarity about professional pathways such as finance, accounting, management, banking, entrepreneurship, and related domains.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="glass-card p-8 rounded-2xl hover:bg-white/5 transition-all duration-300 border border-finance-gold/10"
                        >
                            <div className="bg-finance-navy/50 p-4 rounded-full w-fit mb-6 shadow-inner mx-auto md:mx-0">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 text-center md:text-left">{feature.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed text-center md:text-left">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
