import React from 'react'
import './style.css'
import NavigationBar from '../../components/navbar';
import Hero from '../../components/hero'
import Trending from '../../components/trending'
import SuperHero from '../../components/superhero'

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
            <div className='superhero-bg'>
                <SuperHero/>
            </div>
        </div>
    );
}

export default LandingPages;