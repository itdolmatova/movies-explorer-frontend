import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import burgerPath from '../../images/navi-burger.svg';
import profilePath from '../../images/profile-icon.svg';
import closeButtonPath from '../../images/burger_close-button.svg';

function Navigation(props) {

    return (
        <div className="navigation">
            <div className="navigation__full">
                <div className="navigation__movies">
                    <Link to="movies" className="navigation__movies_link">Фильмы</Link>
                    <Link to="saved" className="navigation__movies_link">Сохраненные фильмы</Link>
                </div>
                <Link to="profile" className="navigation__profile">
                    <h2 className="navigation__profile_link">Аккаунт</h2>
                    <img className="navigation__profile-icon" alt="Логотип профиля" src={profilePath} />
                </Link>
            </div>
            <img className="navigation__burger_icon" alt="Логотип" src={burgerPath} />
            <div className="navigation__burger">
                <div className="navigation__links">
                    <Link to="" className="navigation__link">Главная</Link>
                    <Link to="movies" className="navigation__link">Фильмы</Link>
                    <Link to="saved" className="navigation__link">Сохраненные фильмы</Link>
                </div>
                <Link to="profile" className="navigation__profile">
                    <h2 className="navigation__profile_link">Аккаунт</h2>
                    <img className="navigation__profile-icon" alt="Логотип" src={profilePath} />
                </Link>
                <button className="navigation__close-button" src={closeButtonPath} />
            </div>
        </div >
    );
}

export default Navigation;