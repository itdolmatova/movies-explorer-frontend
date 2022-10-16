import React from 'react';
import Header from '../Header/Header';
import Hero from '../Hero/Hero.js';
import AboutProject from '../AboutProject/AboutProject.js';
import Techs from '../Techs/Techs.js';
import AboutMe from '../AboutMe/AboutMe.js';
import Footer from '../Footer/Footer.js';
import './Main.css';

function Main(props) {
    return (
        <>
            <div className="main">
                <Header loggedIn={false} />
                <Hero />
                <AboutProject />
                <Techs />
                <AboutMe />
                <Footer />
            </div>
        </>
    );
}

export default Main;