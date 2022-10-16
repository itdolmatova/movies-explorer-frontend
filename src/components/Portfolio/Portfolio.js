import React from 'react';
import iconPath from '../../images/portfolio-link.svg';
import './Portfolio.css';


function Portfolio(props) {

    return (
        <>
            <div className="portfolio__container">
                <h2 className="portfolio__navi_text">{props.name}</h2>
                <a className="portfolio__navi_link" href={props.link}>Регистрация</a>
                <img className="portfolio_img" alt="Логотип" src={iconPath} />
            </div>
        </>
    );
}

export default Portfolio;


