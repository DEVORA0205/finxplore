import React from 'react';

const LogoItem = ({ name }) => (
    <div className="flex items-center justify-center mx-12 md:mx-16 group cursor-pointer transition-all duration-300">
        {/* Placeholder for actual logo image */}
        <div className="h-12 w-32 md:h-16 md:w-40 relative opacity-40 group-hover:opacity-100 transition-opacity duration-300 grayscale group-hover:grayscale-0">
            <img
                src={`https://placehold.co/160x64/0a192f/cbd5e1?text=${encodeURIComponent(name)}`}
                alt={name}
                className="w-full h-full object-contain"
            />
        </div>
    </div>
);

const Sponsors = () => {
    const sponsors = [
        "Goldman Sachs", "J.P. Morgan", "Morgan Stanley", "BlackRock",
        "Citigroup", "HDFC Bank", "ICICI Securities", "Zerodha",
        "Groww", "LIC", "SBI Mutual Fund", "Bloomberg"
    ];

    return (
        <section className="py-24 bg-finance-navy relative overflow-hidden">
            {/* Global Noise Overlay */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>

            {/* Soft Gradient Overlay */}
            <div className="absolute inset-0 bg-finance-navy z-20 pointer-events-none [mask-image:linear-gradient(to_right,white_0%,transparent_20%,transparent_80%,white_100%)]"></div>

            <div className="container mx-auto px-6 text-center relative z-20 mb-12">
                <p className="text-finance-gold font-bold tracking-[0.2em] uppercase text-sm">Our Sponsors & Partners</p>
            </div>

            {/* Scrolling Row 1 */}
            <div className="relative flex overflow-x-hidden group">
                <div className="flex animate-marquee whitespace-nowrap py-4">
                    {sponsors.map((sponsor, index) => (
                        <LogoItem key={index} name={sponsor} />
                    ))}
                    {/* Duplicate for seamless loop */}
                    {sponsors.map((sponsor, index) => (
                        <LogoItem key={`dup-${index}`} name={sponsor} />
                    ))}
                </div>
                <div className="flex absolute top-0 animate-marquee2 whitespace-nowrap py-4">
                    {sponsors.map((sponsor, index) => (
                        <LogoItem key={`dup2-${index}`} name={sponsor} />
                    ))}
                    {/* Duplicate for seamless loop */}
                    {sponsors.map((sponsor, index) => (
                        <LogoItem key={`dup3-${index}`} name={sponsor} />
                    ))}
                </div>
            </div>

            {/* Scrolling Row 2 (Reverse) */}
            <div className="relative flex overflow-x-hidden group mt-12">
                <div className="flex animate-marqueeReverse whitespace-nowrap py-4">
                    {sponsors.slice().reverse().map((sponsor, index) => (
                        <LogoItem key={index} name={sponsor} />
                    ))}
                    {sponsors.slice().reverse().map((sponsor, index) => (
                        <LogoItem key={`dup-${index}`} name={sponsor} />
                    ))}
                </div>
                <div className="flex absolute top-0 animate-marqueeReverse2 whitespace-nowrap py-4">
                    {sponsors.slice().reverse().map((sponsor, index) => (
                        <LogoItem key={`dup2-${index}`} name={sponsor} />
                    ))}
                    {sponsors.slice().reverse().map((sponsor, index) => (
                        <LogoItem key={`dup3-${index}`} name={sponsor} />
                    ))}
                </div>
            </div>

            <style jsx>{`
                @keyframes marquee {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-100%); }
                }
                @keyframes marquee2 {
                    0% { transform: translateX(100%); }
                    100% { transform: translateX(0%); }
                }
                @keyframes marqueeReverse {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(0%); }
                }
                 @keyframes marqueeReverse2 {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(100%); }
                }
                .animate-marquee {
                    animation: marquee 100s linear infinite;
                }
                .animate-marquee2 {
                    animation: marquee2 100s linear infinite;
                }
                .animate-marqueeReverse {
                    animation: marqueeReverse 100s linear infinite;
                }
                 .animate-marqueeReverse2 {
                    animation: marqueeReverse2 100s linear infinite;
                }
            `}</style>
        </section>
    );
};

export default Sponsors;
