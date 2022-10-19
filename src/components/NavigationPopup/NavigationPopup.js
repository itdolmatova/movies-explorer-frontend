import React from 'react';
import { Link } from 'react-router-dom';
import profilePath from '../../images/profile-icon.svg';
import './NavigationPopup.css';
import '../Navigation/Navigation.css'


function NavigationPopup(props) {

    return (
        <div className={`navigation__popup ${props.isOpen?"navigation__popup_visible":"navigation__popup_hidden"}`}>
                <div className="navigation__links">
                    <Link to="" className="navigation__link">Главная</Link>
                    <Link to="movies" className="navigation__link navigation__link_active">Фильмы</Link>
                    <Link to="saved" className="navigation__link">Сохраненные фильмы</Link>
                </div>
                <Link to="profile" className="navigation__profile">
                    <h2 className="navigation__profile_link">Аккаунт</h2>
                    <img className="navigation__profile-icon" alt="Аккаунт" src={profilePath} />
                </Link>
                <button type="submit" className="navigation__popup_close-button" onClick={props.onClose} />
         </div>
    );
}

export default NavigationPopup;