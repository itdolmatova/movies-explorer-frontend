import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import profilePath from '../../images/profile-icon.svg';
import './NavigationPopup.css';
import '../Navigation/Navigation.css'


function NavigationPopup(props) {

    return (
        <div className={`navigation__popup ${props.isOpen?"navigation__popup_visible":"navigation__popup_hidden"}`}>
                <ul className="navigation__links">
                    <li className="navigation__link"><NavLink exact to="/" className="navigation__link" activeClassName="navigation__link_active">Главная</NavLink></li>
                    <li className="navigation__link"><NavLink to="movies" className="navigation__link" activeClassName="navigation__link_active">Фильмы</NavLink></li>
                    <li className="navigation__link"><NavLink to="saved" className="navigation__link" activeClassName="navigation__link_active">Сохраненные фильмы</NavLink></li>
                </ul>
                <Link to="profile" className="navigation__profile">
                    <h2 className="navigation__profile_link">Аккаунт</h2>
                    <img className="navigation__profile-icon" alt="Аккаунт" src={profilePath} />
                </Link>
                <button type="button" className="navigation__popup_close-button" onClick={props.onClose} />
         </div>
    );
}

export default NavigationPopup;