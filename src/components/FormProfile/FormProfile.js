import React from 'react';
import Form from '../Form/Form';

function FormProfile(props) {

    function renderForm(props) {
        return (
            <>
                <fieldset className="form__container">
                    <label for="input-name" class="form__profile-label">Имя</label>
                    <input className="form__profile-input form__input_ctrl_name" id="input-name" type="text" name="name" minLength={2} maxLength={30} required />
                    <span className="form__input_error input-name-error" />
                    <label for="input-email" class="form__profile-label">Почта</label>
                    <input className="form__profile-input form__input_email" id="input-email" name="email" type="email" required />
                    <span className="form__input_error input-email-error" />
                </fieldset>
            </>
        )
    }

    return (
        <Form name='formProfile' children={renderForm} buttonText='Редактировать' />
    )
}

export default FormProfile;