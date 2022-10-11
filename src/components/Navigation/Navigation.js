import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import burgerPath from '../../images/navi-burger.svg';
import profilePath from '../../images/profile-icon.svg';

function Navigation(props) {

    return (
        <div className="navigation">
            <div className={`navigation__full ${props.loggedIn?"navigation__full_visibility":"navigation_hidden"}`}>
                <div className="navigation__movies">
                    <Link to="movies" className="navigation__movies_link">Фильмы</Link>
                    <Link to="saved" className="navigation__movies_link">Сохраненные фильмы</Link>
                </div>
                <Link to="profile" className="navigation__profile">
                    <h2 className="navigation__profile_link">Аккаунт</h2>
                    <img className="navigation__profile-icon" alt="Логотип профиля" src={profilePath} />
                </Link>
            </div>
            <img className={`navigation__burger_icon  ${props.loggedIn?"navigation__burger_icon_visibility":"navigation_hidden"}`} alt="Логотип" src={burgerPath} onClick={props.handleNavigationPopupOpen} />

            <div className={`navigation__loggedout  ${props.loggedIn?"navigation_hidden":""}`}>
                <button className="navigation__loggedout_register-button">Регистрация</button>
                <button className="navigation__loggedout_login-button">Войти</button>
            </div>
        </div >
    );
}

export default Navigation;