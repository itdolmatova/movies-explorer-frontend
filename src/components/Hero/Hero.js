import React from 'react';
import heroPath from '../../images/landing_image.svg';
import './Hero.css';

function Hero(props) {
    return (
        <>
            <section className="hero__container">
                <h1 className="hero__title">Учебный проект студента факультета Веб-разработки.</h1>
                <img className="hero__image" alt="Пружинка" src={heroPath} />
            </section>
        </>
    );
}

export default Hero;