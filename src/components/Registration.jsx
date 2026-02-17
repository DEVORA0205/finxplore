import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Users, Briefcase, CheckCircle, AlertCircle } from 'lucide-react';

const Registration = () => {
    const [activeTab, setActiveTab] = useState('entry');
    const [submitStatus, setSubmitStatus] = useState(null);

    const EntryForm = () => {
        const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
        const onSubmit = async (data) => {
            console.log("Entry Data:", data);
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            setSubmitStatus('success');
            setTimeout(() => setSubmitStatus(null), 3000);
        };

        return (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <label className="block text-sm text-gray-400 mb-1">Full Name</label>
                    <input {...register("fullName", { required: "Name is required" })} className="w-full bg-finance-navy/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-finance-gold focus:outline-none" />
                    {errors.fullName && <span className="text-red-400 text-xs flex items-center gap-1 mt-1"><AlertCircle size={12} /> {errors.fullName.message}</span>}
                </div>
                <div>
                    <label className="block text-sm text-gray-400 mb-1">Email</label>
                    <input type="email" {...register("email", { required: "Email is required" })} className="w-full bg-finance-navy/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-finance-gold focus:outline-none" />
                    {errors.email && <span className="text-red-400 text-xs flex items-center gap-1 mt-1"><AlertCircle size={12} /> {errors.email.message}</span>}
                </div>
                <div>
                    <label className="block text-sm text-gray-400 mb-1">College Name</label>
                    <input {...register("college", { required: "College is required" })} className="w-full bg-finance-navy/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-finance-gold focus:outline-none" />
                    {errors.college && <span className="text-red-400 text-xs flex items-center gap-1 mt-1"><AlertCircle size={12} /> {errors.college.message}</span>}
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm text-gray-400 mb-1">Course</label>
                        <select {...register("course", { required: "Course is required" })} className="w-full bg-finance-navy/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-finance-gold focus:outline-none">
                            <option value="">Select</option>
                            <option value="B.Com">B.Com</option>
                            <option value="BBA">BBA</option>
                            <option value="MBA">MBA</option>
                            <option value="Other">Other</option>
                        </select>
                        {errors.course && <span className="text-red-400 text-xs flex items-center gap-1 mt-1"><AlertCircle size={12} /> {errors.course.message}</span>}
                    </div>
                    <div>
                        <label className="block text-sm text-gray-400 mb-1">Year</label>
                        <select {...register("year", { required: "Year is required" })} className="w-full bg-finance-navy/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-finance-gold focus:outline-none">
                            <option value="">Select</option>
                            <option value="1">1st Year</option>
                            <option value="2">2nd Year</option>
                            <option value="3">3rd Year</option>
                        </select>
                        {errors.year && <span className="text-red-400 text-xs flex items-center gap-1 mt-1"><AlertCircle size={12} /> {errors.year.message}</span>}
                    </div>
                </div>
                <button disabled={isSubmitting} type="submit" className="w-full bg-finance-gold hover:bg-yellow-400 text-finance-navy font-bold py-3 rounded-lg mt-4 transition-colors disabled:opacity-50">
                    {isSubmitting ? 'Registering...' : 'Register as Student'}
                </button>
            </form>
        );
    };

    const CompetitionForm = () => {
        const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
        const onSubmit = async (data) => {
            console.log("Competition Data:", data);
            await new Promise(resolve => setTimeout(resolve, 1000));
            setSubmitStatus('success');
            setTimeout(() => setSubmitStatus(null), 3000);
        };
        return (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <label className="block text-sm text-gray-400 mb-1">Team Name</label>
                    <input {...register("teamName", { required: "Team Name is required" })} className="w-full bg-finance-navy/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-finance-gold focus:outline-none" />
                    {errors.teamName && <span className="text-red-400 text-xs flex items-center gap-1 mt-1"><AlertCircle size={12} /> {errors.teamName.message}</span>}
                </div>
                <div>
                    <label className="block text-sm text-gray-400 mb-1">Team Leader Name</label>
                    <input {...register("leaderName", { required: "Leader Name is required" })} className="w-full bg-finance-navy/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-finance-gold focus:outline-none" />
                </div>
                <div>
                    <label className="block text-sm text-gray-400 mb-1">Leader Email</label>
                    <input type="email" {...register("leaderEmail", { required: "Email is required" })} className="w-full bg-finance-navy/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-finance-gold focus:outline-none" />
                </div>
                <button disabled={isSubmitting} type="submit" className="w-full bg-finance-emerald hover:bg-emerald-500 text-white font-bold py-3 rounded-lg mt-4 transition-colors disabled:opacity-50">
                    {isSubmitting ? 'Registering...' : 'Register Team'}
                </button>
            </form>
        );
    };

    const GuestForm = () => {
        const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
        const onSubmit = async (data) => {
            console.log("Guest Data:", data);
            await new Promise(resolve => setTimeout(resolve, 1000));
            setSubmitStatus('success');
            setTimeout(() => setSubmitStatus(null), 3000);
        };
        return (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <label className="block text-sm text-gray-400 mb-1">Full Name</label>
                    <input {...register("fullName", { required: "Name is required" })} className="w-full bg-finance-navy/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-finance-gold focus:outline-none" />
                </div>
                <div>
                    <label className="block text-sm text-gray-400 mb-1">Email</label>
                    <input type="email" {...register("email", { required: "Email is required" })} className="w-full bg-finance-navy/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-finance-gold focus:outline-none" />
                </div>
                <div>
                    <label className="block text-sm text-gray-400 mb-1">Designation</label>
                    <input {...register("designation")} className="w-full bg-finance-navy/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-finance-gold focus:outline-none" />
                </div>
                <div>
                    <label className="block text-sm text-gray-400 mb-1">Organization</label>
                    <input {...register("organization")} className="w-full bg-finance-navy/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-finance-gold focus:outline-none" />
                </div>
                <button disabled={isSubmitting} type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg mt-4 transition-colors disabled:opacity-50">
                    {isSubmitting ? 'Registering...' : 'Register as Guest'}
                </button>
            </form>
        );
    };

    return (
        <section id="register" className="py-24 bg-finance-navy relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Register <span className="text-finance-gold">Now</span></h2>
                    <p className="text-gray-400">Secure your spot at FinExplorer 2026.</p>
                </motion.div>

                <div className="max-w-2xl mx-auto glass-card p-2 rounded-2xl">
                    {/* Tabs */}
                    <div className="grid grid-cols-3 gap-2 mb-8 bg-finance-navy/50 p-1 rounded-xl">
                        <button
                            onClick={() => setActiveTab('entry')}
                            className={`flex items-center justify-center gap-2 py-3 rounded-lg font-bold transition-all ${activeTab === 'entry' ? 'bg-finance-gold text-finance-navy shadow-lg' : 'text-gray-400 hover:text-white'}`}
                        >
                            <User size={18} /> Student
                        </button>
                        <button
                            onClick={() => setActiveTab('competition')}
                            className={`flex items-center justify-center gap-2 py-3 rounded-lg font-bold transition-all ${activeTab === 'competition' ? 'bg-finance-emerald text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
                        >
                            <Users size={18} /> Team
                        </button>
                        <button
                            onClick={() => setActiveTab('guest')}
                            className={`flex items-center justify-center gap-2 py-3 rounded-lg font-bold transition-all ${activeTab === 'guest' ? 'bg-blue-500 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
                        >
                            <Briefcase size={18} /> Guest
                        </button>
                    </div>

                    {/* Forms */}
                    <div className="p-6">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                {activeTab === 'entry' && <EntryForm />}
                                {activeTab === 'competition' && <CompetitionForm />}
                                {activeTab === 'guest' && <GuestForm />}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Success Message */}
                    <AnimatePresence>
                        {submitStatus === 'success' && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0 z-50 flex items-center justify-center bg-finance-navy/90 backdrop-blur-sm rounded-2xl"
                            >
                                <div className="text-center p-8">
                                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-[0_0_20px_rgba(34,197,94,0.5)]">
                                        <CheckCircle size={32} className="text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2">Registration Successful!</h3>
                                    <p className="text-gray-300">We have sent a confirmation email to you.</p>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default Registration;
