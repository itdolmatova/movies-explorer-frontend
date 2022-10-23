import React, { useState } from 'react';
import Form from '../Form/Form';
import { useFormWithValidation } from '../../utils/FormValidator';
import mainApi from '../../utils/MainApi';
import { ERR_REGISTER_UNKNOWN } from '../../utils/Constant';

function FormRegister(props) {
    const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();
    const [ errorMessage, setErrorMessage ] = useState("");

    function register(evt) {
        evt.preventDefault();
        console.log(values);
        mainApi.createUser(values.name, values.email, values.password)
        .then()
        .catch((err) => {setErrorMessage(ERR_REGISTER_UNKNOWN)});
    }

    function renderForm(props) {
        return (
            <>
                <fieldset className="form__container">
                    <label htmlFor="input-name" className="form__label">Имя</label>
                    <input className={"form__input " + (errors.name ? "form__input_error-color" : "")} id="input-name" type="text" 
                        name="name" minLength={2} maxLength={30} required onChange={handleChange} />
                    <span className="form__input_error form__input_error-color" >{errors.name}</span>

                    <label htmlFor="input-email" className="form__label">E-mail</label>
                    <input className={"form__input " + (errors.email ? "form__input_error-color" : "")} id="input-email" 
                        name="email" type="email" required onChange={handleChange} />
                    <span className="form__input_error form__input_error-color">{errors.email}</span>

                    <label htmlFor="input-password" className="form__label">Пароль</label>
                    <input className={"form__input " + (errors.password ? "form__input_error-color" : "")} id="input-password" 
                        name="password" type="password"  minLength={6} required onChange={handleChange} />
                    <span className="form__input_error form__input_error-color">{errors.password}</span>
                </fieldset>
            </>
        )
    }



    return (
        <Form name='formRegister' children={renderForm} buttonText='Зарегистрироваться'
            handleSubmit={register} isValid={isValid} errorMessage={errorMessage} />
    )
}

export default FormRegister;