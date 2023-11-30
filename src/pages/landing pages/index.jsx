import React from 'react'
import './style.css'
import NavigationBar from '../../components/navbar';
import Hero from '../../components/hero'
import PopularMovie from '../../components/PopularMovie';

const LandingPages = () => {
    return (
        <div>
            <div className="my-bg">
                <NavigationBar/>
                <Hero/>
            </div>
            <div className="popular-bg">
                <PopularMovie/>
            </div>
        </div>
    );
}

export default LandingPages;