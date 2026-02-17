import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Layout = ({ children }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Events', href: '#events' },
        { name: 'Speakers', href: '#speakers' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <div className="min-h-screen flex flex-col bg-finance-navy text-white overflow-hidden">
            {/* Navbar */}
            <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-4' : 'bg-transparent py-6'}`}>
                <div className="container mx-auto px-6 flex justify-between items-center">
                    <Link to="/" className="flex items-center gap-2">
                        <img src="/logo.png" alt="FinExplorer" className="h-10 w-auto" />
                        <span className="font-display font-bold text-2xl tracking-tight">FinExplorer</span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a key={link.name} href={link.href} className="text-gray-300 hover:text-finance-gold transition-colors font-medium">
                                {link.name}
                            </a>
                        ))}
                        <button className="bg-finance-gold hover:bg-yellow-400 text-finance-navy px-6 py-2 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg shadow-yellow-500/20">
                            Register Now
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-finance-navy/95 backdrop-blur-lg pt-24 px-6 md:hidden"
                    >
                        <div className="flex flex-col gap-6 text-center">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-2xl font-display font-medium text-white hover:text-finance-gold"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <button className="bg-finance-gold text-finance-navy px-8 py-3 rounded-full font-bold text-xl mt-4">
                                Register Now
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Content */}
            <main className="flex-grow pt-20">
                {children}
            </main>

            {/* Footer */}
            <footer className="bg-finance-lightNavy py-12 border-t border-white/5">
                <div className="container mx-auto px-6 grid md:grid-cols-4 gap-8">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <img src="/logo.png" alt="FinExplorer" className="h-8 w-auto grayscale opacity-80" />
                            <span className="font-display font-bold text-xl opacity-80">FinExplorer</span>
                        </div>
                        <p className="text-gray-400 text-sm">
                            Empowering global commerce students to explore diverse career pathways in finance.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4 text-white">Quick Links</h4>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><a href="#" className="hover:text-finance-gold">Home</a></li>
                            <li><a href="#about" className="hover:text-finance-gold">About Us</a></li>
                            <li><a href="#events" className="hover:text-finance-gold">Events</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4 text-white">Contact</h4>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li>HL College of Commerce</li>
                            <li>Ahmedabad, Gujarat</li>
                            <li>info@finexplorer.com</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4 text-white">Stay Updated</h4>
                        <div className="flex">
                            <input type="email" placeholder="Enter your email" className="bg-finance-navy border border-white/10 px-4 py-2 rounded-l-lg w-full focus:outline-none focus:border-finance-gold text-white" />
                            <button className="bg-finance-gold p-2 rounded-r-lg text-finance-navy font-bold hover:bg-yellow-400"><ChevronRight /></button>
                        </div>
                    </div>
                </div>
                <div className="text-center text-gray-600 text-xs mt-12 border-t border-white/5 pt-8">
                    © 2026 FinExplorer. All rights reserved. Built with ❤️ by FinExplorer Team.
                </div>
            </footer>
        </div>
    );
};

export default Layout;
