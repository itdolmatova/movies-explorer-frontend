import React from 'react';
import { Link } from 'react-router-dom';
import Portfolio from '../Portfolio/Portfolio';
import './AboutMe.css';
import '../Main/Main.css';

function AboutMe() {
    return (
        <section className="aboutme">
            <h1 className="main__title_black">Студент</h1>
            <h2 className="aboutme__title">Анастасия</h2>
            <h3 className="aboutme__subtitle">Фронтенд-разработчик, 38лет</h3>
            <p className="aboutme__text"></p>
            <Link to="https://github.com/itdolmatova" className="aboutme__github-link">Github</Link>
            <nav className="aboutme__navtab">
                <Portfolio name="Статичный сайт" link="https://github.com/itdolmatova/how-to-learn"/>
                <Portfolio name="Адаптивный сайт" link="https://itdolmatova.github.io/russian-travel/index.html"/>
                <Portfolio name="Одностраничное приложение" link="https://place4orthebeauty.dolmatova.nomoredomains.sbs/"/>
            </nav>
        </section>
    );
}

export default AboutMe;