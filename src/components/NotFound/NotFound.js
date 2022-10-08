import React from 'react';
import './NotFound.css';

function NotFound(props) {



    return (
        <div className="notfound">
            <h1 className="notfound__code">404</h1>
            <h2 className="notfound__details">Страница не найдена</h2>
            <a className="notfound__link">Назад</a>
        </div>
    );
}

export default NotFound;