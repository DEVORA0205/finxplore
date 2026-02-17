import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Footer from './Footer';

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
            <Footer />
        </div>
    );
};

export default Layout;
