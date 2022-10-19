import React from 'react';
import { Link } from 'react-router-dom';
import iconPath from '../../images/portfolio-link.svg';
import './Portfolio.css';


function Portfolio(props) {

    return (
        <li className="portfolio">
            <Link to={{ pathname: props.link }} target="_blank" className="portfolio__link">
                <h3 className="portfolio__text">{props.name}</h3>
                <img className="portfolio__img" alt="Стрелочка" src={iconPath} />
            </Link>
        </li>
    );
}

export default Portfolio;



