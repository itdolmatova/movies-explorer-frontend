import React from 'react';
import './HeaderGreeting.css';
import logoPath from '../../images/logo.svg';

function HeaderGreeting(props) {

    return (
        <div className="greeting__container">
            <img className="greeting__logo" alt="Логотип" src={logoPath} />
            <h1 className="greeting__text">{props.greeting}</h1>
        </div>
    );
}

export default HeaderGreeting;