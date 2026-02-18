import React, { useState, useEffect } from 'react';
import { Download, Users, User, Briefcase, Search, LogOut } from 'lucide-react';
import { supabase } from '../supabaseClient';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

const Admin = () => {
    const [activeTab, setActiveTab] = useState('entry');
    const [searchTerm, setSearchTerm] = useState('');
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        // Navigate first to unmount ProtectedRoute before auth state changes
        navigate('/');
        // Complete sign out
        supabase.auth.signOut();
    };

    // Fetch Data from Supabase
    const fetchData = async (tab) => {
        setLoading(true);
        let tableName = '';
        if (tab === 'entry') tableName = 'registrations_entry';
        if (tab === 'competition') tableName = 'registrations_competition';
        if (tab === 'guest') tableName = 'registrations_guest';

        const { data: result, error } = await supabase
            .from(tableName)
            .select('*')
            .order('created_at', { ascending: false });

        if (error) {
            console.error('Error fetching data:', error);
        } else {
            setData(result || []);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchData(activeTab);
    }, [activeTab]);

    const downloadCSV = () => {
        if (data.length === 0) return;
        const headers = Object.keys(data[0]);
        const csvContent = [
            headers.join(','),
            ...data.map(row => headers.map(header => JSON.stringify(row[header])).join(','))
        ].join('\n');

        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `finxplore_${activeTab}_registrations.csv`;
        link.click();
    };

    const filteredData = data.filter(item =>
        Object.values(item).some(val =>
            String(val).toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    return (
        <div className="min-h-screen bg-finance-navy flex flex-col">
            <div className="p-6 pt-12 text-white flex-grow">
                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-6">
                        <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-start">
                            <h1 className="text-2xl md:text-3xl font-bold font-display text-finance-gold">Admin Dashboard</h1>
                            <span className="px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full text-[10px] md:text-xs font-mono text-green-400">
                                SECURE
                            </span>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                            <div className="relative w-full sm:w-auto">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full sm:w-64 pl-10 pr-4 py-2 bg-finance-lightNavy border border-white/10 rounded-lg text-white focus:border-finance-gold focus:outline-none"
                                />
                            </div>

                            <div className="flex gap-2 w-full sm:w-auto">
                                <button onClick={downloadCSV} className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-lg font-bold transition-colors text-sm whitespace-nowrap">
                                    <Download size={18} /> <span className="sm:hidden lg:inline">Export CSV</span><span className="hidden sm:inline lg:hidden">Export</span>
                                </button>

                                <button onClick={handleLogout} className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-red-500/10 hover:bg-red-500/20 text-red-500 border border-red-500/50 px-4 py-2 rounded-lg font-bold transition-colors text-sm">
                                    <LogOut size={18} /> Logout
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Tabs */}
                    <div className="flex gap-4 mb-6 border-b border-white/10 pb-4 overflow-x-auto">
                        <button
                            onClick={() => setActiveTab('entry')}
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all ${activeTab === 'entry' ? 'bg-finance-gold text-finance-navy font-bold' : 'text-gray-400 hover:text-white'}`}
                        >
                            <User size={18} /> Student Registrations
                        </button>
                        <button
                            onClick={() => setActiveTab('competition')}
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all ${activeTab === 'competition' ? 'bg-finance-gold text-finance-navy font-bold' : 'text-gray-400 hover:text-white'}`}
                        >
                            <Users size={18} /> Team Registrations
                        </button>
                        <button
                            onClick={() => setActiveTab('guest')}
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all ${activeTab === 'guest' ? 'bg-finance-gold text-finance-navy font-bold' : 'text-gray-400 hover:text-white'}`}
                        >
                            <Briefcase size={18} /> Speaker Session
                        </button>
                    </div>

                    {/* Table */}
                    <div className="bg-finance-lightNavy/50 rounded-xl border border-white/10 overflow-hidden min-h-[400px]">
                        {loading ? (
                            <div className="flex items-center justify-center h-64 text-finance-gold">
                                <span className="animate-pulse">Loading data...</span>
                            </div>
                        ) : (
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-finance-navy/80 border-b border-white/10 text-gray-400 text-sm">
                                            {data.length > 0 && Object.keys(data[0]).map(key => (
                                                <th key={key} className="p-4 capitalize whitespace-nowrap">{key.replace(/_/g, ' ')}</th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredData.map((row, index) => (
                                            <tr key={index} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                                {Object.values(row).map((val, i) => (
                                                    <td key={i} className="p-4 text-sm text-gray-200 max-w-xs truncate">
                                                        {typeof val === 'object' && val !== null ? JSON.stringify(val) : val}
                                                    </td>
                                                ))}
                                            </tr>
                                        ))}
                                        {filteredData.length === 0 && (
                                            <tr>
                                                <td colSpan="100%" className="p-8 text-center text-gray-400">No records found.</td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Admin;
