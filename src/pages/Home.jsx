import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Timeline from '../components/Timeline';
import Speakers from '../components/Speakers';
import Sponsors from '../components/Sponsors';
import WhyAttend from '../components/WhyAttend';
import Contact from '../components/Contact';
import Registration from '../components/Registration';

const Home = () => {
    return (
        <div className="bg-finance-navy min-h-screen">
            <Hero />
            <About />
            <Timeline />
            <Speakers />
            <WhyAttend />
            <Registration />
            <Sponsors />
            <Contact />
        </div>
    );
};

export default Home;
