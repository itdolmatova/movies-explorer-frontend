import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound(props) {

    return (
        <div className="notfound">
            <h1 className="notfound__code">404</h1>
            <h2 className="notfound__details">Страница не найдена</h2>
            <Link to="/" className="notfound__link">Назад</Link>
        </div>
    );
}

export default NotFound;