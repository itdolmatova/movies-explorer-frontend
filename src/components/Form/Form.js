import React from 'react';
import './Form.css';

function Form(props) {
   const buildButtonClass = () => {
    return (props.buttonClass ? props.buttonClass : "form__submit-button")
    + " "
    + (props.isValid ? "" : "form__submit-button_inactive" )
   }

    return (
        <form className="form" onSubmit={props.handleSubmit}>
            <div className="form__container">
                {props.children(props)}
            </div>
            <span className="form__input_error form__input_error-color">{props.errorMessage}</span>
            <button type="submit" className={buildButtonClass()} disabled={props.isValid ? false : true} >{props.buttonText}</button>
        </form>
    );
}

export default Form;