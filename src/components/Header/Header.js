import React from 'react';
import logoPath from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';

function Header(props) {

    return (
        <header className="header">
            <img className="header__logo" alt="Логотип" src={logoPath} />
            <Navigation />            
        </header>
    );
}

export default Header;