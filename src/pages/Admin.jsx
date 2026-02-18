import React, { useState, useEffect } from 'react';
import { Download, Users, User, Briefcase, Search, LogOut, Lock, AlertCircle } from 'lucide-react';
import { supabase } from '../supabaseClient';

const Admin = () => {
    // Auth State
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userRole, setUserRole] = useState(null); // 'admin' | 'viewer'

    // Login Form State
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');

    const [activeTab, setActiveTab] = useState('entry');
    const [searchTerm, setSearchTerm] = useState('');
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    // Hardcoded Credentials
    const CREDENTIALS = {
        'admin': { pass: 'finxplore2026', role: 'admin' },
        'viewer': { pass: 'guest123', role: 'viewer' }
    };

    const handleLogin = (e) => {
        e.preventDefault();
        const user = CREDENTIALS[username];
        if (user && user.pass === password) {
            setIsAuthenticated(true);
            setUserRole(user.role);
            setLoginError('');
            fetchData(activeTab); // Fetch data on login
        } else {
            setLoginError('Invalid credentials');
        }
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        setUserRole(null);
        setUsername('');
        setPassword('');
        setData([]);
    };

    // Fetch Data from Supabase
    const fetchData = async (tab) => {
        if (!isAuthenticated) return;
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
        if (isAuthenticated) {
            fetchData(activeTab);
        }
    }, [activeTab, isAuthenticated]);

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

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-finance-navy flex items-center justify-center p-6">
                <div className="bg-finance-lightNavy/50 backdrop-blur-md border border-white/10 p-8 rounded-2xl w-full max-w-md shadow-2xl">
                    <div className="text-center mb-8">
                        <div className="w-16 h-16 bg-finance-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 text-finance-gold">
                            <Lock size={32} />
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-2">Admin Access</h2>
                        <p className="text-gray-400 text-sm">Finxplore 2026 Dashboard</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">User ID</label>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-finance-gold focus:outline-none transition-colors"
                                placeholder="Enter User ID"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-finance-gold focus:outline-none transition-colors"
                                placeholder="Enter Password"
                            />
                        </div>

                        {loginError && (
                            <div className="flex items-center gap-2 text-red-400 text-sm bg-red-500/10 p-3 rounded-lg border border-red-500/20">
                                <AlertCircle size={16} /> {loginError}
                            </div>
                        )}

                        <button
                            type="submit"
                            className="w-full bg-finance-gold text-finance-navy font-bold py-3 rounded-lg hover:bg-white transition-colors mt-2"
                        >
                            Access Dashboard
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-finance-navy p-6 pt-24 text-white">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                    <div className="flex items-center gap-4">
                        <h1 className="text-3xl font-bold font-display text-finance-gold">Admin Dashboard</h1>
                        <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-mono text-gray-300">
                            {userRole.toUpperCase()}
                        </span>
                    </div>

                    <div className="flex gap-4">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                            <input
                                type="text"
                                placeholder="Search..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="pl-10 pr-4 py-2 bg-finance-lightNavy border border-white/10 rounded-lg text-white focus:border-finance-gold focus:outline-none"
                            />
                        </div>

                        {userRole === 'admin' && (
                            <button onClick={downloadCSV} className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-lg font-bold transition-colors text-sm">
                                <Download size={18} /> Export CSV
                            </button>
                        )}

                        <button onClick={handleLogout} className="flex items-center gap-2 bg-red-500/10 hover:bg-red-500/20 text-red-500 border border-red-500/50 px-4 py-2 rounded-lg font-bold transition-colors text-sm">
                            <LogOut size={18} /> Logout
                        </button>
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
    );
};

export default Admin;
