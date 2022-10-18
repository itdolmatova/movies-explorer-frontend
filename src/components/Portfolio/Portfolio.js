import React from 'react';
import { Link } from 'react-router-dom';
import iconPath from '../../images/portfolio-link.svg';
import './Portfolio.css';


function Portfolio(props) {

    return (
        <>
            <Link to={{ pathname: props.link }} target="_blank" className="portfolio__link">
                <h2 className="portfolio__text">{props.name}</h2>
                <img className="portfolio__img" alt="Стрелочка" src={iconPath} />
            </Link>
        </>
    );
}

export default Portfolio;



