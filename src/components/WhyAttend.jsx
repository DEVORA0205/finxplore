import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const WhyAttend = () => {
    const benefits = [
        "Gain clarity on career paths like CA, CS, MBA, and CFA.",
        "Network with industry leaders and alumni.",
        "Participate in case study competitions with cash prizes.",
        "Get exclusive access to internship opportunities.",
        "Receive a certificate of participation.",
        "Understand the future of FinTech and Digital Banking."
    ];

    return (
        <section className="py-24 bg-finance-navy relative">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    {/* Left: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full md:w-1/2"
                    >
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Why <span className="text-finance-emerald">Attend?</span></h2>
                        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                            FinExplorer isn't just a seminar; it's a launchpad for your career. Whether you're confused about your next step or ready to specialize, this event offers something for everyone.
                        </p>

                        <div className="grid gap-4">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <CheckCircle className="text-finance-gold w-6 h-6 shrink-0 mt-0.5" />
                                    <span className="text-gray-200">{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full md:w-1/2 relative"
                    >
                        <div className="relative z-10 grid grid-cols-2 gap-4">
                            <div className="space-y-4 translate-y-8">
                                <div className="h-48 rounded-2xl bg-gradient-to-br from-finance-gold to-yellow-600 opacity-20 animate-pulse"></div>
                                <div className="h-64 rounded-2xl bg-finance-lightNavy border border-white/10 glass-card"></div>
                            </div>
                            <div className="space-y-4">
                                <div className="h-64 rounded-2xl bg-finance-emerald/20 border border-finance-emerald/10 glass-card"></div>
                                <div className="h-48 rounded-2xl bg-gradient-to-tr from-blue-600 to-finance-navy opacity-40"></div>
                            </div>
                        </div>
                        {/* Background Blob */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-finance-gold/20 blur-[100px] -z-10 rounded-full"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default WhyAttend;
