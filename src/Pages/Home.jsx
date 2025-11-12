import Overview from 'Components/Overview';
import Tips from 'Components/Tips';
import WhyMatters from 'Components/WhyMatters';
import React from 'react';

const Home = () => {
    return (
        <div>
            <Overview></Overview>
            <Tips></Tips>
            <WhyMatters></WhyMatters>
        </div>
    );
};

export default Home;