import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ChevronDown, Calendar, MapPin, Play } from 'lucide-react';

const Hero = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);

    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const targetDate = new Date('2026-03-14T09:00:00').getTime();

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance < 0) {
                clearInterval(interval);
                return;
            }

            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000),
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-finance-navy">
            {/* Cinematic Background - Aurora Effect */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-[-50%] left-[-20%] w-[140%] h-[200%] bg-gradient-to-br from-finance-navy via-black to-finance-navy z-0"></div>
                <motion.div
                    animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[-10%] left-[-10%] w-[80vw] h-[80vw] bg-finance-gold/5 rounded-full blur-[120px] mix-blend-screen"
                />
                <motion.div
                    animate={{ rotate: -360, scale: [1, 1.5, 1] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-[-10%] right-[-10%] w-[80vw] h-[80vw] bg-finance-emerald/5 rounded-full blur-[120px] mix-blend-screen"
                />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-overlay"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 container mx-auto px-6 pt-20 flex flex-col items-center text-center">

                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
                >
                    <span className="w-2 h-2 rounded-full bg-finance-gold animate-pulse"></span>
                    <span className="text-finance-gold text-xs font-bold tracking-widest uppercase">Registration Open for 2026</span>
                </motion.div>

                {/* Hero Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-6xl md:text-8xl lg:text-9xl font-display font-bold text-white mb-6 tracking-tight leading-none"
                >
                    Fin<span className="text-transparent bg-clip-text bg-gradient-to-r from-finance-gold via-yellow-200 to-finance-gold animate-gradient-x">Explorer</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl font-light"
                >
                    The ultimate convergence of finance, strategy, and innovation. <br className="hidden md:block" /> Join the most prestigious commerce event of the year.
                </motion.p>

                {/* Countdown Timer */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                    className="grid grid-cols-4 gap-4 md:gap-8 mb-12"
                >
                    {Object.entries(timeLeft).map(([unit, value]) => (
                        <div key={unit} className="flex flex-col items-center">
                            <div className="w-16 md:w-24 h-16 md:h-24 bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-2 shadow-2xl shadow-black/20">
                                <span className="text-2xl md:text-4xl font-display font-bold text-white">{value < 10 ? `0${value}` : value}</span>
                            </div>
                            <span className="text-xs text-gray-400 uppercase tracking-widest">{unit}</span>
                        </div>
                    ))}
                </motion.div>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-col md:flex-row gap-4 items-center"
                >
                    <button className="group bg-finance-gold text-finance-navy px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-all flex items-center gap-2 shadow-[0_0_30px_-5px_theme('colors.yellow.500')]">
                        Secure Your Spot
                        <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="group px-8 py-4 rounded-full font-bold text-lg border border-white/10 hover:bg-white/5 transition-all flex items-center gap-2 backdrop-blur-sm text-white">
                        <Play size={20} className="fill-white group-hover:scale-110 transition-transform" />
                        Watch Trailer
                    </button>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 1, duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500/50"
            >
                <ChevronDown size={32} />
            </motion.div>

            {/* Parallax Elements (Optional subtle details) */}
            <motion.div style={{ y: y1 }} className="absolute top-1/4 right-[10%] w-20 h-20 border border-white/5 rounded-full blur-[1px] pointer-events-none opacity-50" />
            <motion.div style={{ y: y2 }} className="absolute bottom-1/3 left-[10%] w-32 h-32 border border-finance-gold/10 rounded-full blur-[2px] pointer-events-none opacity-30" />
        </section>
    );
};

export default Hero;
