import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, ArrowRight, Instagram, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="min-h-screen bg-finance-navy relative flex items-center py-20 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-finance-lightNavy/10 -skew-x-12 transform origin-top translate-x-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-finance-gold/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column: Context & Info */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-12"
                        >
                            <h2 className="text-5xl md:text-7xl font-display font-medium text-white mb-6 leading-tight">
                                Let’s Start a <br />
                                <span className="text-finance-gold italic">Conversation.</span>
                            </h2>
                            <p className="text-gray-400 text-lg max-w-md">
                                Whether you're a student, a potential sponsor, or just curious—we're ready to answer your questions.
                            </p>
                        </motion.div>

                        <div className="space-y-6">
                            {/* Location Card */}
                            <a
                                href="https://www.google.com/maps/search/?api=1&query=HL+College+of+Commerce+Navrangpura+Ahmedabad+Gujarat+380009"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-finance-gold/50 rounded-xl p-6 transition-all duration-300 cursor-pointer block"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-finance-lightNavy rounded-lg text-finance-gold group-hover:scale-110 transition-transform">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-lg mb-1">Visit Us</h4>
                                        <p className="text-gray-400 text-sm leading-relaxed group-hover:text-white transition-colors">HL College of Commerce,<br />Navrangpura, Ahmedabad, Gujarat 380009</p>
                                    </div>
                                </div>
                            </a>

                            {/* Contact Grid */}
                            <div className="grid md:grid-cols-2 gap-6">
                                <a href="mailto:info@finxplore.com" className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-finance-gold/50 rounded-xl p-6 transition-all duration-300">
                                    <div className="flex items-center gap-4 mb-3">
                                        <div className="p-2 bg-finance-lightNavy rounded-lg text-blue-400 group-hover:scale-110 transition-transform">
                                            <Mail size={20} />
                                        </div>
                                        <h4 className="text-white font-bold">Email</h4>
                                    </div>
                                    <p className="text-gray-400 text-sm group-hover:text-white transition-colors">info@finxplore.com</p>
                                </a>

                                <a href="tel:+919876543210" className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-finance-gold/50 rounded-xl p-6 transition-all duration-300">
                                    <div className="flex items-center gap-4 mb-3">
                                        <div className="p-2 bg-finance-lightNavy rounded-lg text-green-400 group-hover:scale-110 transition-transform">
                                            <Phone size={20} />
                                        </div>
                                        <h4 className="text-white font-bold">Phone</h4>
                                    </div>
                                    <p className="text-gray-400 text-sm group-hover:text-white transition-colors">+91 98765 43210</p>
                                </a>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="mt-12 flex items-center gap-6">
                            <span className="text-gray-500 text-sm font-bold uppercase tracking-widest">Follow Us</span>
                            <div className="h-px w-12 bg-gray-700"></div>
                            <div className="flex gap-4">
                                {[Instagram, Twitter, Linkedin].map((Icon, i) => (
                                    <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-finance-gold hover:border-finance-gold/50 hover:bg-finance-gold/10 transition-all duration-300">
                                        <Icon size={18} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="relative">
                        <div className="bg-finance-lightNavy/30 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-sm relative z-20">
                            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>

                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="group">
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 group-focus-within:text-finance-gold transition-colors">Your Name</label>
                                        <input type="text" className="w-full bg-finance-navy/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-finance-gold focus:ring-1 focus:ring-finance-gold focus:outline-none transition-all" placeholder="John Doe" />
                                    </div>
                                    <div className="group">
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 group-focus-within:text-finance-gold transition-colors">Email Address</label>
                                        <input type="email" className="w-full bg-finance-navy/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-finance-gold focus:ring-1 focus:ring-finance-gold focus:outline-none transition-all" placeholder="john@company.com" />
                                    </div>
                                </div>

                                <div className="group">
                                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 group-focus-within:text-finance-gold transition-colors">Subject</label>
                                    <select className="w-full bg-finance-navy/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-finance-gold focus:ring-1 focus:ring-finance-gold focus:outline-none transition-all appearance-none cursor-pointer">
                                        <option>General Inquiry</option>
                                        <option>Sponsorship Opportunity</option>
                                        <option>Judge / Speaker Application</option>
                                        <option>Technical Support</option>
                                    </select>
                                </div>

                                <div className="group">
                                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 group-focus-within:text-finance-gold transition-colors">Message</label>
                                    <textarea rows="4" className="w-full bg-finance-navy/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-finance-gold focus:ring-1 focus:ring-finance-gold focus:outline-none transition-all resize-none" placeholder="How can we help you today?"></textarea>
                                </div>

                                <button type="submit" className="w-full bg-finance-gold text-finance-navy font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-white transition-colors group">
                                    Send Message
                                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </form>
                        </div>

                        {/* Decorative blob behind form */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-finance-gold/5 rounded-full blur-3xl -z-10"></div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
