import React from 'react';
import { motion } from 'framer-motion';

const Sponsors = () => {
    const sponsors = [
        "HDFC Bank", "ICICI Securities", "Zerodha", "Groww", "LIC", "SBI Mutual Fund"
    ];

    return (
        <section className="py-20 bg-finance-lightNavy/30">
            <div className="container mx-auto px-6 text-center">
                <h3 className="text-2xl font-display font-bold text-gray-400 mb-12 uppercase tracking-widest">Powered By</h3>

                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-70">
                    {sponsors.map((sponsor, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.1, opacity: 1, filter: "grayscale(0%)" }}
                            className="grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
                        >
                            {/* Placeholder for Logo */}
                            <span className="text-2xl md:text-3xl font-bold text-gray-500 hover:text-white font-display">
                                {sponsor}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Sponsors;
