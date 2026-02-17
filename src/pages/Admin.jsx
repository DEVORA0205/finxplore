import React, { useState } from 'react';
import { Download, Users, User, Briefcase, Search } from 'lucide-react';

const Admin = () => {
    const [activeTab, setActiveTab] = useState('entry');
    const [searchTerm, setSearchTerm] = useState('');

    // Mock Data
    const entryData = [
        { id: 1, name: "Aarav Patel", email: "aarav@example.com", college: "HL College", course: "B.Com", year: "2" },
        { id: 2, name: "Isha Shah", email: "isha@example.com", college: "St. Xaviers", course: "BBA", year: "3" },
        { id: 3, name: "Rohan Gupta", email: "rohan@example.com", college: "PDPU", course: "MBA", year: "1" },
    ];

    const competitionData = [
        { id: 1, team: "FinWizards", leader: "Karan Mehta", email: "karan@example.com", members: "Riya, Amit" },
        { id: 2, team: "MarketBulls", leader: "Sneha Roy", email: "sneha@example.com", members: "Rahul, Jay" },
    ];

    const guestData = [
        { id: 1, name: "Mr. Rajiv Bajaj", email: "rajiv@bajaj.com", designation: "MD", organization: "Bajaj Finserv" },
        { id: 2, name: "Ms. Anjali Sud", email: "anjali@vimeo.com", designation: "CEO", organization: "Vimeo" },
    ];

    const getData = () => {
        switch (activeTab) {
            case 'entry': return entryData;
            case 'competition': return competitionData;
            case 'guest': return guestData;
            default: return [];
        }
    };

    const downloadCSV = () => {
        const data = getData();
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

    const filteredData = getData().filter(item =>
        Object.values(item).some(val =>
            String(val).toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    return (
        <div className="min-h-screen bg-finance-navy p-6 pt-24 text-white">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                    <h1 className="text-3xl font-bold font-display text-finance-gold">Admin Dashboard</h1>
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
                        <button onClick={downloadCSV} className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-lg font-bold transition-colors">
                            <Download size={18} /> Export CSV
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
                        <Briefcase size={18} /> Guest List
                    </button>
                </div>

                {/* Table */}
                <div className="bg-finance-lightNavy/50 rounded-xl border border-white/10 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-finance-navy/80 border-b border-white/10 text-gray-400 text-sm">
                                    {getData().length > 0 && Object.keys(getData()[0]).map(key => (
                                        <th key={key} className="p-4 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {filteredData.map((row, index) => (
                                    <tr key={index} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                        {Object.values(row).map((val, i) => (
                                            <td key={i} className="p-4 text-sm text-gray-200">{val}</td>
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
                </div>
            </div>
        </div>
    );
};

export default Admin;
