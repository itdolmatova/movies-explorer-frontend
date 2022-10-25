import React, { useState } from 'react';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import NavigationPopup from '../NavigationPopup/NavigationPopup';
import './Header.css';

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
                <div className="header__logo">
                    <Logo />
                </div>
                <Navigation loggedIn={props.loggedIn} handleNavigationPopupOpen={handleNavigationPopupOpen} />
            </header>
            <NavigationPopup isOpen={isNavigationPopupOpen} onClose={handlePopupClose} />
        </>
    );
}

export default Header;