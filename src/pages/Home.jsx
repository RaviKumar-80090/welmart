import React from 'react';
import Service from '../componet/Service';
import Trusted from '../componet/Trusted';
import HeroSection from '../componet/Hero-section';
import Feature from '../componet/Feature';

const Home = () => {
    const data ={
        name:"WelMart"
    }
    return (
        <>
        <HeroSection myData={data}/>
        <Feature/>
        {/* <HeroSection />
         */}
        <Service/>
        <Trusted/>
        </>
    );
}

export default Home;
