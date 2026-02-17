import React from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-finance-lightNavy/20 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Get in <span className="text-finance-gold">Touch</span></h2>
                    <p className="text-gray-400">Have questions? We're here to help.</p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Info & Map */}
                    <div className="space-y-8">
                        <div className="grid gap-6">
                            <div className="glass-card p-6 flex items-start gap-4">
                                <MapPin className="text-finance-emerald w-6 h-6 mt-1" />
                                <div>
                                    <h4 className="font-bold text-white text-lg">Location</h4>
                                    <p className="text-gray-400">HL College of Commerce,<br />Navrangpura, Ahmedabad, Gujarat 380009</p>
                                </div>
                            </div>
                            <div className="glass-card p-6 flex items-start gap-4">
                                <Mail className="text-finance-gold w-6 h-6 mt-1" />
                                <div>
                                    <h4 className="font-bold text-white text-lg">Email Us</h4>
                                    <p className="text-gray-400">info@finexplorer.com</p>
                                </div>
                            </div>
                            <div className="glass-card p-6 flex items-start gap-4">
                                <Phone className="text-blue-400 w-6 h-6 mt-1" />
                                <div>
                                    <h4 className="font-bold text-white text-lg">Call Us</h4>
                                    <p className="text-gray-400">+91 98765 43210</p>
                                </div>
                            </div>
                        </div>

                        {/* Map Embed */}
                        <div className="rounded-2xl overflow-hidden h-64 border border-white/10 grayscale hover:grayscale-0 transition-all duration-500">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.936081515982!2d72.5537!3d23.0333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba8b6b15%3A0x6283b58475d6978d!2sH.L.%20College%20of%20Commerce!5e0!3m2!1sen!2sin!4v1645000000000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy">
                            </iframe>
                        </div>
                    </div>

                    {/* Quick Form */}
                    <div className="glass-card p-8 md:p-10">
                        <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400 ml-1">Name</label>
                                    <input type="text" className="w-full bg-finance-navy/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-finance-gold focus:outline-none focus:ring-1 focus:ring-finance-gold transition-all" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400 ml-1">Email</label>
                                    <input type="email" className="w-full bg-finance-navy/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-finance-gold focus:outline-none focus:ring-1 focus:ring-finance-gold transition-all" placeholder="john@example.com" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm text-gray-400 ml-1">Subject</label>
                                <input type="text" className="w-full bg-finance-navy/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-finance-gold focus:outline-none focus:ring-1 focus:ring-finance-gold transition-all" placeholder="Inquiry about..." />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm text-gray-400 ml-1">Message</label>
                                <textarea rows="4" className="w-full bg-finance-navy/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-finance-gold focus:outline-none focus:ring-1 focus:ring-finance-gold transition-all" placeholder="How can we help you?"></textarea>
                            </div>
                            <button type="button" className="w-full bg-finance-emerald hover:bg-emerald-500 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-colors">
                                Send Message
                                <Send size={18} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
import { motion } from 'framer-motion';

export default Contact;
