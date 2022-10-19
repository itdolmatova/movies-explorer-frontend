import React from 'react';
import './Form.css';

function Form(props) {
    return (
        <form className="form">
            <div className="form__container">
                {props.children(props)}
            </div>
            <button type="submit" className={props.buttonClass?props.buttonClass:"form__submit-button"}>{props.buttonText}</button>
        </form>
    );
}

export default Form;