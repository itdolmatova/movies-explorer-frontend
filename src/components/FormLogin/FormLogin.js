import React from 'react';
import Form from '../Form/Form';

function FormLogin(props) {

    function renderForm(props) {
        return (
            <>
                <fieldset className="form__container">
                    <label for="input-email" class="form__label">E-mail</label>
                    <input className="form__input popup__input_email" id="input-email" name="email" type="email" required />
                    <span className="form__input-error input-email-error" />
                    <label for="input-password" class="form__label">Пароль</label>
                    <input className="form__input popup__input_password" id="input-password" name="password" type="text" required />
                    <span className="form__input-error input-password-error" />
                </fieldset>
            </>
        )
    }

    return (
        <Form name='formLogin' children={renderForm} buttonText='Войти' />
    )
}

export default FormLogin;