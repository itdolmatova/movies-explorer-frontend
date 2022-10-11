import React, {useState} from 'react';
import logoPath from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';
import NavigationPopup from '../NavigationPopup/NavigationPopup';

function Header(props) {

    const [isNavigationPopupOpen, setIsNavigationPopupOpen] = useState(false);

    function handlePopupClose() {
        setIsNavigationPopupOpen(false);
    }

    function handleNavigationPopupOpen() {
        setIsNavigationPopupOpen(true);
    }

    return (
        <>
        <header className="header">
            <img className="header__logo" alt="Логотип" src={logoPath} />
            <Navigation loggedIn={props.loggedIn} handleNavigationPopupOpen={handleNavigationPopupOpen} />            
        </header>
        <NavigationPopup isOpen={isNavigationPopupOpen} onClose={handlePopupClose}/>
        </>
    );
}

export default Header;