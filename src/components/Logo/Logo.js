import React from 'react';
import { Link } from 'react-router-dom';
import logoPath from '../../images/logo.svg';
import './Logo.css';

function Logo(props) {

    return (
        <Link to="/" className="logo__link">
            <img className="logo" alt="Логотип" src={logoPath} />
        </Link>
    );
}

export default Logo;