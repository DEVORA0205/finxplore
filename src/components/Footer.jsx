import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Instagram, MapPin, Calendar } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-finance-navy border-t border-white/5 py-12 relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10 text-center">

                {/* Event Branding */}
                <div className="mb-8">
                    <Link to="/" className="inline-flex items-center gap-3 mb-4 group">
                        <div className="w-10 h-10 bg-finance-gold rounded-xl flex items-center justify-center text-finance-navy font-bold text-xl group-hover:scale-110 transition-transform">
                            F
                        </div>
                        <span className="font-display font-bold text-3xl text-white tracking-tight">FinExplorer 2026</span>
                    </Link>

                    <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 text-gray-400 text-sm mt-4">
                        <span className="flex items-center gap-2"><Calendar size={16} className="text-finance-gold" /> March 14-15, 2026</span>
                        <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-white/10"></span>
                        <span className="flex items-center gap-2"><MapPin size={16} className="text-finance-emerald" /> HL College of Commerce, Ahmedabad</span>
                    </div>
                </div>

                {/* Socials */}
                <div className="flex justify-center gap-6 mb-12">
                    {[Linkedin, Twitter, Instagram].map((Icon, i) => (
                        <a key={i} href="#" className="p-3 rounded-full bg-white/5 hover:bg-white/10 hover:text-finance-gold transition-all duration-300 border border-white/5 hover:border-finance-gold/30">
                            <Icon size={20} />
                        </a>
                    ))}
                </div>

                {/* Credits & Copyright */}
                <div className="border-t border-white/5 pt-8 flex flex-col items-center gap-4">
                    <p className="text-gray-500 text-xs uppercase tracking-widest">
                        Organized by HL College of Commerce
                    </p>
                    <p className="text-gray-600 text-xs">
                        © {new Date().getFullYear()} FinExplorer. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
