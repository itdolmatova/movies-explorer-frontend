import React from 'react';
import logoPath from '../../images/logo.svg';
import './Logo.css';

function Logo(props) {

    return (
        <>
            <img className="logo" alt="Логотип" src={logoPath} />
        </>
    );
}

export default Logo;