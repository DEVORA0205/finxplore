import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const TimelineEvent = ({ event, index, isLast }) => {
    return (
        <div className={`flex justify-between items-center w-full mb-8 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
            {/* Content Side */}
            <div className="w-5/12"></div>

            {/* Center Node */}
            <div className="relative flex items-center justify-center w-2/12">
                <div className="h-full w-px bg-white/10 absolute top-0 bottom-0"></div>
                {!isLast && <div className="h-full w-px bg-white/10 absolute top-0 bottom-[-50px] left-1/2 -translate-x-1/2"></div>}

                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ margin: "-20% 0px -20% 0px" }}
                    transition={{ duration: 0.5 }}
                    className="w-4 h-4 rounded-full bg-finance-gold border-4 border-finance-navy relative z-10 shadow-[0_0_20px_rgba(251,191,36,0.5)]"
                ></motion.div>
            </div>

            {/* Text Side */}
            <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ margin: "-20% 0px -20% 0px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}
            >
                <span className="text-finance-emerald font-mono text-sm tracking-wider mb-2 block">{event.time}</span>
                <h3 className="text-2xl font-display font-medium text-white mb-2">{event.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-xs ml-auto mr-0">
                    {index % 2 !== 0 ? <span className="mr-auto ml-0 block">{event.desc}</span> : event.desc}
                </p>
            </motion.div>
        </div>
    );
};

const Timeline = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    const events = [
        { time: "09:00 AM", title: "Registrations & Breakfast", desc: "Check-in, collect your badges, and fuel up for the day." },
        { time: "10:00 AM", title: "Opening Keynote", desc: "The Future of Fintech: A deep dive by industry titans." },
        { time: "11:30 AM", title: "Panel: Banking 4.0", desc: "Discussions on AI, Blockchain, and the changing face of banking." },
        { time: "01:00 PM", title: "Networking Lunch", desc: "Gourmet lunch and structured networking with peers and mentors." },
        { time: "02:30 PM", title: "Workshops", desc: "Hands-on sessions: 'Algorithmic Trading' & 'Startup Valuation'." },
        { time: "04:30 PM", title: "Closing & Awards", desc: "Wrapping up insights and recognizing competition winners." }
    ];

    return (
        <section id="timeline" ref={ref} className="py-32 bg-finance-navy relative overflow-hidden">
            {/* Global Noise Overlay */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>

            {/* Background Gradients - Unified to Gold */}
            <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-finance-gold/5 rounded-full blur-[100px] -translate-x-1/2 pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-24">
                    <motion.h4
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-finance-gold font-bold tracking-widest uppercase text-sm mb-4"
                    >
                        The Journey
                    </motion.h4>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-display font-medium text-white"
                    >
                        A day of <span className="italic font-serif text-finance-emerald">insight.</span>
                    </motion.h2>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Animated Central Line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block"></div>
                    <motion.div
                        style={{ height }}
                        className="absolute left-1/2 top-0 w-px bg-gradient-to-b from-finance-gold via-finance-emerald to-blue-500 -translate-x-1/2 hidden md:block shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                    ></motion.div>

                    {/* Desktop View */}
                    <div className="hidden md:block">
                        {events.map((event, index) => (
                            <TimelineEvent key={index} event={event} index={index} isLast={index === events.length - 1} />
                        ))}
                    </div>

                    {/* Mobile View (simplified) */}
                    <div className="md:hidden space-y-12 pl-8 border-l border-white/10 relative">
                        {events.map((event, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="relative"
                            >
                                <div className="absolute -left-[37px] top-1.5 w-3 h-3 rounded-full bg-finance-gold border-2 border-finance-navy shadow-[0_0_10px_rgba(251,191,36,0.3)]"></div>
                                <span className="text-finance-emerald font-mono text-xs tracking-wider mb-1 block">{event.time}</span>
                                <h3 className="text-xl font-display font-medium text-white mb-2">{event.title}</h3>
                                <p className="text-gray-400 text-sm">{event.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;
