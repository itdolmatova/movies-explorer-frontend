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
                    <Link to="movies" className="navigation__movies_link navigation__movies_link_active">Фильмы</Link>
                    <Link to="saved" className="navigation__movies_link">Сохраненные фильмы</Link>
                </div>
                <Link to="profile" className="navigation__profile">
                    <h2 className="navigation__profile_link">Аккаунт</h2>
                    <img className="navigation__profile-icon" alt="Аккаунт" src={profilePath} />
                </Link>
            </div>
            <img className={`navigation__burger_icon  ${props.loggedIn?"navigation__burger_icon_visibility":"navigation_hidden"}`} alt="Меню" src={burgerPath} onClick={props.handleNavigationPopupOpen} />

            <div className={`navigation__loggedout  ${props.loggedIn?"navigation_hidden":""}`}>
                <Link className="navigation__loggedout_register-button" to="/sign-up">Регистрация</Link>
                <Link className="navigation__loggedout_login-button" to="/sign-in">Войти</Link>
            </div>
        </div >
    );
}

export default Navigation;