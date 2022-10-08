import React from 'react';
import './Form.css';

function Form(props) {
    return (
        <div className="form">
            <div className="form__container">
                {props.children(props)}
            </div>
            <button type="submit" className="form__submit-button">{props.buttonText}</button>
           
        </div>
    );
}

export default Form;