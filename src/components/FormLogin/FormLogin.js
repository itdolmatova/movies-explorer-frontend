import React, { useState } from 'react';
import Form from '../Form/Form';
import { useFormWithValidation } from '../../utils/FormValidator';
import mainApi from '../../utils/MainApi';
import { ERR_LOGIN_UNKNOWN } from '../../utils/Constant';
import { useHistory } from 'react-router-dom';
import { handleLogin } from '../../utils/Auth';

function FormLogin(props) {

    const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();
    const [ errorMessage, setErrorMessage ] = useState("");
    const history = useHistory();
    
    function login(evt) {
        evt.preventDefault();
        mainApi.login(values.email, values.password)
        .then((res) => handleLogin(res))
        .then(() => history.push('/movies'))
        .catch((err) => {setErrorMessage(ERR_LOGIN_UNKNOWN + " " + err)});
    }
    
    function renderForm(props) {
        return (
            <>
                <fieldset className="form__container">
                    <label htmlFor="input-email" className="form__label">E-mail</label>
                    <input className={"form__input " + (errors.email ? "form__input_error-color" : "")} id="input-email"
                        name="email" type="email" required onChange={handleChange} />
                    <span className="form__input_error form__input_error-color">{errors.email}</span>

                    <label htmlFor="input-password" className="form__label">Пароль</label>
                    <input className={"form__input " + (errors.password ? "form__input_error-color" : "")} id="input-password"
                        name="password" type="password" minLength={6} required onChange={handleChange} />
                    <span className="form__input_error form__input_error-color">{errors.password}</span>
                </fieldset>
            </>
        )
    }

    return (
        <Form name='formLogin' children={renderForm} buttonText='Войти'
            handleSubmit={login} isValid={isValid} errorMessage={errorMessage} />
    )
}

export default FormLogin;