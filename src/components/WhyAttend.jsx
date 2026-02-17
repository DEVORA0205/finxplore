import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowUpRight } from 'lucide-react';

const AccordionItem = ({ item, isOpen, onClick, index }) => {
    return (
        <div className="border-b border-white/10 last:border-0">
            <button
                onClick={onClick}
                className="w-full flex items-center justify-between py-10 group text-left focus:outline-none"
            >
                <div className="flex items-baseline gap-8">
                    <span className="font-mono text-finance-gold opacity-60 text-lg">0{index + 1}</span>
                    <h3 className={`text-3xl md:text-5xl font-display transition-colors duration-300 ${isOpen ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>
                        {item.title}
                    </h3>
                </div>
                <div className={`p-3 rounded-full border transition-all duration-300 ${isOpen ? 'bg-white text-finance-navy border-white' : 'border-white/20 text-white group-hover:border-finance-gold group-hover:text-finance-gold'}`}>
                    {isOpen ? <Minus size={24} /> : <Plus size={24} />}
                </div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="pb-10 pl-0 md:pl-14 flex flex-col md:flex-row gap-8 items-start">
                            <div className="md:w-1/2">
                                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                                    {item.desc}
                                </p>
                                <ul className="space-y-2 mb-6">
                                    {item.points.map((point, i) => (
                                        <li key={i} className="flex items-center gap-3 text-gray-400 text-sm">
                                            <div className="w-1.5 h-1.5 rounded-full bg-finance-emerald"></div>
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="md:w-1/2 w-full h-64 md:h-80 rounded-2xl overflow-hidden relative">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-finance-navy/20 mix-blend-multiply"></div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const WhyAttend = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const benefits = [
        {
            title: "Career Clarity",
            desc: "Confused between CA, CFA, or MBA? Get a definitive roadmap. We break down the pros, cons, and salary trajectories of each path so you can choose with conviction.",
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2670&auto=format&fit=crop",
            points: ["Expert comparative analysis", "1-on-1 Q&A sessions", "Salary trajectory maps"]
        },
        {
            title: "Elite Networking",
            desc: "Your network is your net worth. Rub shoulders with CFOs, Investment Bankers, and successful Alumni who were once in your shoes.",
            image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=2670&auto=format&fit=crop",
            points: ["Coffee mixer with speakers", "LinkedIn connection opportunities", "Mentorship pairing"]
        },
        {
            title: "Real-World Edge",
            desc: "Theory is fine, but practice pays. Participate in high-stakes case study wars and simulations that mimic real boardroom challenges.",
            image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2670&auto=format&fit=crop",
            points: ["Live Case Study War", "Cash Prizes Pool: ₹50,000", "Certificate of Merit"]
        },
        {
            title: "Internship Access",
            desc: "Skip the cold emails. Top performing delegates get fast-tracked into interview rounds with our partner firms and sponsors.",
            image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2669&auto=format&fit=crop",
            points: ["Resume drop for sponsors", "On-spot interview shortlist", "Summer internship roles"]
        }
    ];

    return (
        <section className="py-24 bg-finance-navy relative overflow-hidden">
            {/* Global Noise Overlay */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>

            {/* Ambient Glow */}
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-finance-emerald/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
                    <div>
                        <h4 className="text-finance-gold font-bold tracking-widest uppercase text-sm mb-4">The ROI</h4>
                        <h2 className="text-4xl md:text-5xl font-display font-medium text-white">
                            Invest one day.<br />
                            <span className="text-gray-500">Transform your</span> <span className="text-finance-emerald font-serif italic">decade.</span>
                        </h2>
                    </div>
                </div>

                <div className="max-w-5xl mx-auto">
                    {benefits.map((item, index) => (
                        <AccordionItem
                            key={index}
                            item={item}
                            index={index}
                            isOpen={openIndex === index}
                            onClick={() => setOpenIndex(index === openIndex ? null : index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyAttend;
