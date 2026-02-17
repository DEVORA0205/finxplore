import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Users, Briefcase, CheckCircle, AlertCircle, ArrowRight, Loader } from 'lucide-react';

const Registration = () => {
    const [activeTab, setActiveTab] = useState('entry');
    const [submitStatus, setSubmitStatus] = useState(null);

    // Reusable Input Component
    const InputField = ({ label, register, name, rules, error, type = "text", placeholder }) => (
        <div className="mb-4">
            <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">{label}</label>
            <input
                type={type}
                placeholder={placeholder}
                {...register(name, rules)}
                className={`w-full bg-finance-lightNavy/30 border ${error ? 'border-red-500' : 'border-white/10'} rounded-xl px-5 py-4 text-white placeholder-gray-400 focus:border-finance-gold focus:ring-1 focus:ring-finance-gold focus:outline-none transition-all duration-300`}
            />
            {error && <span className="text-red-400 text-xs flex items-center gap-1 mt-2 opacity-0 animate-fadeIn"><AlertCircle size={12} /> {error.message}</span>}
        </div>
    );

    const SelectField = ({ label, register, name, rules, error, options }) => (
        <div className="mb-4">
            <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">{label}</label>
            <div className="relative">
                <select
                    {...register(name, rules)}
                    className={`w-full bg-finance-lightNavy/30 border ${error ? 'border-red-500' : 'border-white/10'} rounded-xl px-5 py-4 text-white focus:border-finance-gold focus:ring-1 focus:ring-finance-gold focus:outline-none transition-all duration-300 appearance-none`}
                >
                    <option value="" className="bg-finance-navy text-gray-400">Select an option</option>
                    {options.map(opt => (
                        <option key={opt.value} value={opt.value} className="bg-finance-navy">{opt.label}</option>
                    ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </div>
            </div>
            {error && <span className="text-red-400 text-xs flex items-center gap-1 mt-2"><AlertCircle size={12} /> {error.message}</span>}
        </div>
    );

    const FormContainer = ({ onSubmit, children, isSubmitting, btnColor = "bg-finance-gold", btnText = "Complete Registration" }) => (
        <form onSubmit={onSubmit} className="h-full flex flex-col justify-between">
            <div className="space-y-1">
                {children}
            </div>
            <button
                disabled={isSubmitting}
                type="submit"
                className={`w-full ${btnColor} text-finance-navy font-bold py-4 rounded-xl mt-8 flex items-center justify-center gap-3 hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed group`}
            >
                {isSubmitting ? <Loader className="animate-spin" size={20} /> : (
                    <>
                        {btnText} <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </>
                )}
            </button>
        </form>
    );

    const EntryForm = () => {
        const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
        const onSubmit = async (data) => {
            console.log("Entry Data:", data);
            await new Promise(resolve => setTimeout(resolve, 1500));
            setSubmitStatus('success');
            setTimeout(() => setSubmitStatus(null), 3000);
        };

        return (
            <FormContainer onSubmit={handleSubmit(onSubmit)} isSubmitting={isSubmitting}>
                <div className="grid md:grid-cols-2 gap-4">
                    <InputField label="Full Name" name="fullName" register={register} rules={{ required: "Required" }} error={errors.fullName} placeholder="John Doe" />
                    <InputField label="Email Address" name="email" type="email" register={register} rules={{ required: "Required" }} error={errors.email} placeholder="john@example.com" />
                </div>
                <InputField label="College / Institution" name="college" register={register} rules={{ required: "Required" }} error={errors.college} placeholder="e.g. Harvard University" />
                <div className="grid grid-cols-2 gap-4">
                    <SelectField
                        label="Course"
                        name="course"
                        register={register}
                        rules={{ required: "Required" }}
                        error={errors.course}
                        options={[{ value: "B.Com", label: "B.Com" }, { value: "BBA", label: "BBA" }, { value: "MBA", label: "MBA" }, { value: "Other", label: "Other" }]}
                    />
                    <SelectField
                        label="Year"
                        name="year"
                        register={register}
                        rules={{ required: "Required" }}
                        error={errors.year}
                        options={[{ value: "1", label: "1st Year" }, { value: "2", label: "2nd Year" }, { value: "3", label: "3rd Year" }]}
                    />
                </div>
            </FormContainer>
        );
    };

    const CompetitionForm = () => {
        const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
        const onSubmit = async (data) => {
            await new Promise(resolve => setTimeout(resolve, 1500));
            setSubmitStatus('success');
            setTimeout(() => setSubmitStatus(null), 3000);
        };
        return (
            <FormContainer onSubmit={handleSubmit(onSubmit)} isSubmitting={isSubmitting} btnColor="bg-finance-emerald" btnText="Register Your Team">
                <InputField label="Team Name" name="teamName" register={register} rules={{ required: "Required" }} error={errors.teamName} placeholder="The Wolves of Wall St." />
                <div className="grid md:grid-cols-2 gap-4">
                    <InputField label="Leader Name" name="leaderName" register={register} rules={{ required: "Required" }} error={errors.leaderName} placeholder="Team Captain" />
                    <InputField label="Leader Email" name="leaderEmail" type="email" register={register} rules={{ required: "Required" }} error={errors.leaderEmail} placeholder="captain@team.com" />
                </div>
                <div className="p-4 bg-finance-emerald/10 border border-finance-emerald/20 rounded-xl mt-2 mb-2">
                    <p className="text-finance-emerald text-xs font-medium flex items-center gap-2">
                        <Users size={14} /> Team Size: 2-4 Members
                    </p>
                </div>
            </FormContainer>
        );
    };

    const GuestForm = () => {
        const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
        const onSubmit = async (data) => {
            await new Promise(resolve => setTimeout(resolve, 1500));
            setSubmitStatus('success');
            setTimeout(() => setSubmitStatus(null), 3000);
        };
        return (
            <FormContainer onSubmit={handleSubmit(onSubmit)} isSubmitting={isSubmitting} btnColor="bg-blue-500" btnText="Request Guest Pass">
                <InputField label="Full Name" name="fullName" register={register} rules={{ required: "Required" }} error={errors.fullName} />
                <InputField label="Email Address" name="email" type="email" register={register} rules={{ required: "Required" }} error={errors.email} />
                <div className="grid md:grid-cols-2 gap-4">
                    <InputField label="Designation" name="designation" register={register} />
                    <InputField label="Organization" name="organization" register={register} />
                </div>
            </FormContainer>
        );
    };

    const tabs = [
        { id: 'entry', label: 'Student', icon: <User size={18} />, color: 'bg-finance-gold', text: 'Apply for the full-day student experience.' },
        { id: 'competition', label: 'Team', icon: <Users size={18} />, color: 'bg-finance-emerald', text: 'Register your squad for the case showdown.' },
        { id: 'guest', label: 'Guest', icon: <Briefcase size={18} />, color: 'bg-blue-500', text: 'Join us as an industry professional.' },
    ];

    return (
        <section id="register" className="min-h-screen py-24 bg-finance-navy relative flex items-center">

            {/* Background Texture */}
            <div className="absolute inset-0 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">

                <div className="max-w-6xl mx-auto bg-finance-lightNavy/20 border border-white/5 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm flex flex-col lg:flex-row min-h-[700px]">

                    {/* Left Panel - Visual & Context */}
                    <div className="lg:w-2/5 relative p-12 flex flex-col justify-between overflow-hidden">
                        {/* Dynamic Background based on Tab */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className={`absolute inset-0 opacity-100 ${activeTab === 'entry' ? 'bg-gradient-to-br from-finance-gold/90 to-orange-900/90' :
                                        activeTab === 'competition' ? 'bg-gradient-to-br from-finance-emerald/90 to-green-900/90' :
                                            'bg-gradient-to-br from-blue-500/90 to-indigo-900/90'
                                    } mix-blend-multiply`}
                            ></motion.div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
                        </AnimatePresence>

                        {/* Content Layer */}
                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div>
                                <h2 className="text-4xl font-display font-medium text-white mb-2">Secure Your Spot.</h2>
                                <p className="text-blue-100/80 text-sm mb-12">Limited seats available for FinExplorer 2026.</p>

                                <div className="space-y-4">
                                    {tabs.map((tab) => (
                                        <button
                                            key={tab.id}
                                            onClick={() => setActiveTab(tab.id)}
                                            className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-center gap-4 group backdrop-blur-sm ${activeTab === tab.id
                                                ? 'bg-black/20 border-white/20 shadow-lg'
                                                : 'border-transparent hover:bg-black/10'
                                                }`}
                                        >
                                            <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-inner ${activeTab === tab.id ? `${tab.color} text-finance-navy scale-110` : 'bg-white/10 text-white group-hover:bg-white/20'}`}>
                                                {tab.icon}
                                            </div>
                                            <div>
                                                <span className={`block font-bold text-lg transition-colors ${activeTab === tab.id ? 'text-white' : 'text-white/70 group-hover:text-white'}`}>{tab.label}</span>
                                                <span className={`text-sm transition-colors hidden md:block ${activeTab === tab.id ? 'text-white/90' : 'text-white/50 group-hover:text-white/80'}`}>{tab.text}</span>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Bottom Info */}
                            <div className="mt-12 md:mt-0">
                                <div className="flex items-center gap-3 text-sm text-white/80">
                                    <div className="flex -space-x-2">
                                        {[1, 2, 3].map(i => (
                                            <div key={i} className="w-8 h-8 rounded-full border-2 border-white/10 bg-gray-700"></div>
                                        ))}
                                    </div>
                                    <span className="font-medium text-shadow-sm">+400 students registered</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Panel - Form Area */}
                    <div className="lg:w-3/5 p-8 md:p-12 bg-finance-navy/40 relative">
                        <div className="max-w-md mx-auto h-full flex flex-col">
                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-white mb-1">
                                    {activeTab === 'entry' && 'Student Application'}
                                    {activeTab === 'competition' && 'Team Registration'}
                                    {activeTab === 'guest' && 'Guest Access'}
                                </h3>
                                <p className="text-gray-400 text-sm">Please fill in your details accurately.</p>
                            </div>

                            <div className="flex-1">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeTab}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.3 }}
                                        className="h-full"
                                    >
                                        {activeTab === 'entry' && <EntryForm />}
                                        {activeTab === 'competition' && <CompetitionForm />}
                                        {activeTab === 'guest' && <GuestForm />}
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>

                        {/* Success Overlay */}
                        <AnimatePresence>
                            {submitStatus === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="absolute inset-0 z-50 flex items-center justify-center bg-finance-navy/95 backdrop-blur-md"
                                >
                                    <div className="text-center p-8">
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            className="w-20 h-20 bg-finance-emerald rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_50px_rgba(16,185,129,0.4)]"
                                        >
                                            <CheckCircle size={40} className="text-white" />
                                        </motion.div>
                                        <h3 className="text-3xl font-display font-medium text-white mb-3">You're In!</h3>
                                        <p className="text-gray-400 text-lg">Check your inbox for your ticket.</p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Registration;
