import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ChevronDown, Play, Star } from 'lucide-react';

const Hero = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);
    const rotate = useTransform(scrollY, [0, 500], [0, 45]);

    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const targetDate = new Date('2026-03-14T09:00:00').getTime();
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;
            if (distance < 0) { clearInterval(interval); return; }
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
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-finance-navy selection:bg-finance-gold selection:text-finance-navy">
            {/* Cinematic Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-50%] left-[-20%] w-[140%] h-[200%] bg-gradient-to-br from-finance-navy via-[#050b14] to-finance-navy z-0"></div>

                {/* Organic Orbs */}
                <motion.div
                    animate={{ rotate: 360, scale: [1, 1.1, 1], x: [0, 30, 0] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[-10%] left-[-10%] w-[70vw] h-[70vw] bg-finance-gold/5 rounded-full blur-[100px] mix-blend-screen opacity-60"
                />
                <motion.div
                    animate={{ rotate: -360, scale: [1, 1.3, 1], y: [0, -50, 0] }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-finance-emerald/5 rounded-full blur-[120px] mix-blend-screen opacity-50"
                />

                {/* Noise Texture for Film Grain Feel */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-40 mix-blend-overlay"></div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 container mx-auto px-6 pt-20 flex flex-col items-center text-center">

                {/* Live Badge - Pill Shape */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl mb-12 hover:bg-white/10 transition-colors cursor-default"
                >
                    <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
                    </span>
                    <span className="text-gray-200 text-xs font-bold tracking-widest uppercase">Registration Live • 2026</span>
                </motion.div>

                {/* Editorial Typography */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="relative mb-8"
                >
                    <h1 className="text-5xl md:text-7xl lg:text-9xl font-display font-medium text-white tracking-tight leading-[1.1]">
                        The <span className="font-serif italic text-finance-gold opacity-90">Future</span> of <br />
                        <span className="relative inline-block">
                            Finance
                            {/* Hand-drawn underline SVG */}
                            <svg className="absolute -bottom-2 md:-bottom-4 left-0 w-full h-3 md:h-6 text-finance-emerald opacity-80" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.00025 7.00001C30.2974 3.01899 104.288 -2.48101 198.001 2.00001" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                            </svg>
                        </span>
                        {' '}Is Here.
                    </h1>

                    {/* Decorative Star/Asterisk */}
                    <motion.div
                        style={{ rotate }}
                        className="absolute -top-8 -right-8 md:-top-12 md:-right-16 text-finance-gold opacity-50 hidden md:block"
                    >
                        <Star size={48} fill="currentColor" />
                    </motion.div>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-lg md:text-2xl text-gray-400 mb-12 max-w-2xl font-light leading-relaxed"
                >
                    Join the vanguard of commerce. Where strategy meets innovation, and students become <span className="text-white font-medium">leaders</span>.
                </motion.p>

                {/* Glass Countdown */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-wrap justify-center gap-4 md:gap-8 mb-16"
                >
                    {Object.entries(timeLeft).map(([unit, value]) => (
                        <div key={unit} className="flex flex-col items-center gap-2">
                            <div className="text-3xl md:text-5xl font-serif italic text-white w-16 md:w-24 text-center">
                                {value < 10 ? `0${value} ` : value}
                            </div>
                            <span className="text-[10px] md:text-xs text-gray-500 uppercase tracking-widest font-bold">{unit}</span>
                        </div>
                    ))}
                </motion.div>

                {/* Primary Actions */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-col md:flex-row gap-6 items-center"
                >
                    <button className="group relative px-8 py-4 bg-finance-gold rounded-full overflow-hidden transition-transform active:scale-95">
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                        <span className="relative flex items-center gap-2 text-finance-navy font-bold text-lg">
                            Secure Your Spot <ArrowRight size={20} />
                        </span>
                    </button>

                    <button className="group flex items-center gap-3 text-white hover:text-finance-gold transition-colors">
                        <div className="w-12 h-12 rounded-full border border-white/20 group-hover:border-finance-gold/50 flex items-center justify-center transition-colors">
                            <Play size={16} className="fill-current ml-1" />
                        </div>
                        <span className="font-medium text-lg">Watch the Film</span>
                    </button>
                </motion.div>
            </div>

            {/* Scroll Text */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-6 text-gray-600 text-xs font-mono hidden md:block vertical-text"
                style={{ writingMode: 'vertical-rl' }}
            >
                SCROLL TO EXPLORE
            </motion.div>
        </section>
    );
};

export default Hero;
