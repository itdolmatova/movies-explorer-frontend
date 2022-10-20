import React from 'react';
import { Link } from 'react-router-dom';
import profilePath from '../../images/profile-icon.svg';
import './NavigationPopup.css';
import '../Navigation/Navigation.css'


function NavigationPopup(props) {

    return (
        <div className={`navigation__popup ${props.isOpen?"navigation__popup_visible":"navigation__popup_hidden"}`}>
                <ul className="navigation__links">
                    <li className="navigation__link"><Link to="" className="navigation__link">Главная</Link></li>
                    <li className="navigation__link"><Link to="movies" className="navigation__link navigation__link_active">Фильмы</Link></li>
                    <li className="navigation__link"><Link to="saved" className="navigation__link">Сохраненные фильмы</Link></li>
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