import React from 'react';
import '../Main/Main.css';
import './AboutProject.css';


function AboutProject() {
    return (
        <section className="about">
            <h1 className="main__title">О проекте</h1>
            <div className="about__container">
                <div className="about__description">
                    <h2 className="about__subtitle">Дипломный проект включал 5 этапов</h2>
                    <p className="about__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className="about__description">
                    <h2 className="about__subtitle">На выполнение диплома ушло 5 недель</h2>
                    <p className="about__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div className="about__scale">
                <div className="about__scale_container">
                    <div className="about__scale_week">1 неделя</div>
                    <div className="about__scale_weeks">4 недели</div>
                </div>
                <div className="about__scale_container">
                    <div className="about__scale_back-end">Back-end</div>
                    <div className="about__scale_front-end">Front-end</div>
                </div>
            </div>
        </section>
    );
}

export default AboutProject;