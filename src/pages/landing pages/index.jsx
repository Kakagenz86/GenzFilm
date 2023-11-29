import React from 'react'
import './style.css'
import NavigationBar from '../../components/navbar';
import Hero from '../../components/hero'
import Trending from '../../components/trending'

const LandingPages = () => {
    return (
        <div>
            <div className="my-bg">
                <NavigationBar/>
                <Hero/>
            </div>
            <div className="trending-bg">
                <Trending/>
            </div>
        </div>
    );
}

export default LandingPages;