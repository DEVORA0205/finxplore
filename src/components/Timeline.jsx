import React from 'react';
import { motion } from 'framer-motion';

const Timeline = () => {
    const events = [
        { time: "09:00 AM", title: "Inauguration", desc: "Opening ceremony and welcome address by the Principal." },
        { time: "10:00 AM", title: "Keynote: Future of Finance", desc: "Insights from a leading industry expert on emerging trends." },
        { time: "11:30 AM", title: "Panel Discussion", desc: "Diverse Career Pathways: Banking, CA, MBA, and more." },
        { time: "01:00 PM", title: "Networking Lunch", desc: "Connect with speakers and peers." },
        { time: "02:00 PM", title: "Workshops & Breakouts", desc: "Focused sessions on specific domains like Stock Markets and Entrepreneurship." },
        { time: "04:30 PM", title: "Closing Ceremony", desc: "Summary and vote of thanks." }
    ];

    return (
        <section id="timeline" className="py-24 bg-finance-navy relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-finance-lightNavy/30 to-transparent pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Event <span className="text-finance-emerald">Timeline</span></h2>
                    <p className="text-gray-400">A structured day of learning and exploration.</p>
                </motion.div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-finance-gold/0 via-finance-gold/50 to-finance-gold/0 transform md:-translate-x-1/2"></div>

                    <div className="space-y-12">
                        {events.map((event, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Time & Dot */}
                                <div className="flex md:contents">
                                    <div className="md:w-1/2"></div> {/* Spacer */}
                                    <div className="relative mx-auto md:mx-0 flex items-center justify-center">
                                        <div className="w-4 h-4 rounded-full bg-finance-gold shadow-[0_0_15px_rgba(251,191,36,0.5)] z-20 absolute left-4 md:left-1/2 transform md:-translate-x-1/2 mt-1.5 md:mt-0"></div>
                                    </div>
                                    <div className="md:w-1/2"></div> {/* Spacer */}
                                </div>

                                {/* Content Card */}
                                <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                                    <div className="glass-card p-6 border-finance-emerald/20 hover:border-finance-emerald/50 transition-colors">
                                        <span className="inline-block px-3 py-1 rounded-full bg-finance-emerald/10 text-finance-emerald text-sm font-bold mb-2 border border-finance-emerald/20">
                                            {event.time}
                                        </span>
                                        <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                                        <p className="text-gray-400 text-sm">{event.desc}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;
