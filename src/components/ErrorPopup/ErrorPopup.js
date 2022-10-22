import React from 'react';
import './ErrorPopup.css';


function ErrorPopup(props) {

    return (
        <div className={`error-popup__container ${props.isOpen ? "error-popup__visible" : "error-popup__hidden"}`}>
            <p className="error-popup__text">{props.message}</p>
            <button type="button" className="error-popup___close-button" onClick={props.onClose} />
        </div>
    );
}

export default ErrorPopup;