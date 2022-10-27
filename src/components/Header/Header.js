import React, { useState } from 'react';
import Logo from '../Logo/Logo';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import Navigation from '../Navigation/Navigation';
import NavigationPopup from '../NavigationPopup/NavigationPopup';
import './Header.css';

function Header(props) {

    const [isNavigationPopupOpen, setIsNavigationPopupOpen] = useState(false);
    const currentUser = React.useContext(CurrentUserContext);
console.log(currentUser);
    function handlePopupClose() {
        setIsNavigationPopupOpen(false);
    }

    function handleNavigationPopupOpen() {
        setIsNavigationPopupOpen(true);
    }

    return (
        <>
            <header className="header">
                <div className="header__logo">
                    <Logo />
                </div>
                <Navigation loggedIn={currentUser.name?true:false} handleNavigationPopupOpen={handleNavigationPopupOpen} />
            </header>
            <NavigationPopup isOpen={isNavigationPopupOpen} onClose={handlePopupClose} />
        </>
    );
}

export default Header;