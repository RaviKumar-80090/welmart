import React from 'react';
import HeroSection from '../componet/Hero-section';

const About = () => {
    const data={
        name:"Welmart Ecommrce"
    }
    return (
            <>
            <HeroSection myData={data}/>
            </>
    );
}

export default About;
