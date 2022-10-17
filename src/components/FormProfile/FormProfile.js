import React from 'react';
import Form from '../Form/Form';

function FormProfile(props) {

    function renderForm(props) {
        return (
            <>
                <fieldset className="form__container form__container_profile">
                    <div className="form__input_container">
                        <label for="input-name" className="form__label_profile">Имя</label>
                        <input className="form__input_profile form__input_ctrl_name" id="input-name" type="text" name="name" placeholder="Анастасия" minLength={2} maxLength={30} required/>
                    </div>
                    <span className="form__input_error input-name-error" />
                    <div className="form__input_underline"></div>
                    <div className="form__input_container">
                        <label for="input-email" className="form__label_profile">E-mail</label>
                        <input className="form__input_profile form__input_email" id="input-email" name="email" placeholder="email@email.com" type="email" required />
                    </div>
                    <span className="form__input_error input-email-error" />
                </fieldset>
            </>
        )
    }

    return (
        <Form name='formProfile' children={renderForm} buttonText='Редактировать' buttonClass="form__profile_submit-button" />
    )
}

export default FormProfile;