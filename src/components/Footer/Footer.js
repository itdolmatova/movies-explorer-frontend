import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer(props) {
    return (
        <div className="footer">
            <h3 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h3>
            <div className="footer__container">
                <p className="footer__copyright">&copy; 2022</p>
                <div className="footer__navi">
                    <Link to={{ pathname: "https://practicum.yandex.ru/" }} target="_blank" className="footer__link">Яндекс.Практикум</Link>
                    <Link to={{ pathname: "https://github.com/itdolmatova" }} target="_blank" className="footer__link">Github</Link>
                </div>
            </div>
        </div>
    );
}

export default Footer;



