import React from 'react';
import { Link, useHistory} from 'react-router-dom';
import './NotFound.css';

function NotFound(props) {
    const history = useHistory();

    return (
        <div className="notfound">
            <h1 className="notfound__code">404</h1>
            <h2 className="notfound__details">Страница не найдена</h2>
            <Link to="/" className="notfound__link" onClick={history.goBack}>Назад</Link>
        </div>
    );
}

export default NotFound;