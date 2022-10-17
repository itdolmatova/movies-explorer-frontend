import React from 'react';
import Logo from '../Logo/Logo';
import './HeaderGreeting.css';


function HeaderGreeting(props) {

    return (
        <div className="greeting__container">
            <Logo />
            <h1 className="greeting__text">{props.greeting}</h1>
        </div>
    );
}

export default HeaderGreeting;