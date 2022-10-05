import React from 'react';
import './NotFound.css';

function NotFound(props) {



    return (
        <div className="error">
            <h1 className="error__code">404</h1>
            <h2 className="error__details">Страница не найдена</h2>
            <a className="error__link">Назад</a>
        </div>
    );
}

export default NotFound;