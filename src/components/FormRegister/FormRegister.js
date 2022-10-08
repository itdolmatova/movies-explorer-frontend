import React from 'react';
import '../Form/Form';
import '../Form/Form.css';

function FormRegister(props) {

    function renderForm(props) {
        return (
            <>
                <fieldset className="form__container">
                    <label for="input-name" class="form__label">Имя</label>
                    <input className="form__input form__input_ctrl_name" id="input-name" type="text" name="name" minLength={2} maxLength={30} required />
                    <span className="form__input-error input-name-error" />
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
        <FormRegister name='formRegister' formName="form__register" formClass="form__register"
            children={renderForm} buttonText='Зарегистрироваться' />
    )
}

export default FormRegister;