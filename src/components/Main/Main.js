import React from 'react';
import Header from '../Header/Header';
import Hero from '../Hero/Hero.js';
import AboutProject from '../AboutProject/AboutProject.js';
import './Main.css';

function Main(props) {
    return (
        <>
            <div className="main">
                <Header loggedIn={false} />
                <Hero />
                <AboutProject />
                

            </div>
        </>
    );
}

export default Main;