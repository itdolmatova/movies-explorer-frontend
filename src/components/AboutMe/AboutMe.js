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
                    <p className="aboutme__text">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. 
С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                    <Link to="https://github.com/itdolmatova" className="aboutme__github-link">Github</Link>
                </div>
                <img className="aboutme__photo" alt="Логотип" src={photoPath} />
            </div>


            <nav>
                <h2 className="aboutme__list">Портфолио</h2>
                <Portfolio name="Статичный сайт" link="https://github.com/itdolmatova/how-to-learn" />
                <div className="aboutme__underline"/>
                <Portfolio name="Адаптивный сайт" link="https://itdolmatova.github.io/russian-travel/index.html" />
                <div className="aboutme__underline"/>
                <Portfolio name="Одностраничное приложение" link="https://place4orthebeauty.dolmatova.nomoredomains.sbs/" />
            </nav>
        </section>
    );
}

export default AboutMe;