import React from 'react';
import { Link } from 'react-router-dom';
import Portfolio from '../Portfolio/Portfolio';
import './AboutMe.css';
import '../Main/Main.css';
import photoPath from '../../images/my-photo.jpg';

function AboutMe() {
    return (
        <section className="aboutme">
            <h1 className="main__title">Студент</h1>

            <div className="aboutme__container">
                <div className="aboutme__info" >

                    <h2 className="aboutme__title">Анастасия</h2>
                    <h3 className="aboutme__subtitle">Фронтенд-разработчик, 38лет</h3>
                    <p className="aboutme__text">Я родилась и живу в Краснодаре, закончила социально-гуманитарный факультет КубГТУ по специальности "Документационное обеспечение управления". Проработала в крупном российском операторе связи 9 лет, в т.ч. в должности бизнес-аналитика. Затем ушла в декрет, во время которого прохожу обучение в Яндекс.Практикуме по специальности "Веб-разработчик".</p>
                    <Link to="https://github.com/itdolmatova" className="aboutme__github-link">Github</Link>
                </div>
                <img className="aboutme__photo" alt="Фотография" src={photoPath} />
            </div>


            <nav>
                <ul className="aboutme__list">
                    <h2 className="aboutme__portfolio-title">Портфолио</h2>
                    <Portfolio name="Статичный сайт" link="https://github.com/itdolmatova/how-to-learn" />
                    <div className="aboutme__underline" />
                    <Portfolio name="Адаптивный сайт" link="https://itdolmatova.github.io/russian-travel/index.html" />
                    <div className="aboutme__underline" />
                    <Portfolio name="Одностраничное приложение" link="https://place4orthebeauty.dolmatova.nomoredomains.sbs/" />
                </ul>
            </nav>
        </section>
    );
}

export default AboutMe;