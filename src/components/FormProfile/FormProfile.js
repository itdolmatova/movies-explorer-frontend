import React, { useState, useEffect } from 'react';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import Form from '../Form/Form';
import { useFormWithValidation } from '../../utils/FormValidator';
import mainApi from '../../utils/MainApi';
import { ERR_PROFILE_UNKNOWN } from '../../utils/Constant';

function FormProfile(props) {

    const currentUser = React.useContext(CurrentUserContext);
    const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();
    const [ errorMessage, setErrorMessage ] = useState("");
    const [ isSuccessMessage, setIsSuccessMessage ] = useState(false);

    useEffect (()=>{
        setIsSuccessMessage(false);
    },
    [values]);

    function saveProfile(evt) {
        evt.preventDefault();
        mainApi.updateUser({ name: currentUser.name, email: currentUser.email, ...values })
        .then((res) => props.setCurrentUser(res))
        .then(() => setErrorMessage(""))
        .then(() => setIsSuccessMessage(true))
        .catch((err) => {
            if(mainApi.isUnauthorized(err)) {
                props.handleLogout();
            } else {
                setErrorMessage(ERR_PROFILE_UNKNOWN+ " " + err.message);
            }
        
        });
    }

    function isFieldsChanged(){
        return (values.email && values.email !== currentUser.email) || (values.name && values.name !== currentUser.name);
    }

    function renderForm(props) {
        return (
            <>
                <fieldset className="form__container form__container_profile">

                    <div className="form__input_container">
                        <label htmlFor="input-name" className="form__label_profile">Имя</label>
                        <input className={"form__input_profile " + (errors.name ? "form__input_error-color" : "")}
                            id="input-name" type="text" name="name" minLength={2} defaultValue={currentUser.name}
                            maxLength={30} required onChange={handleChange} />
                    </div>
                    <span className="form__input_error form__input_error-color" >{errors.name}</span>

                    <div className="form__input_underline"></div>

                    <div className="form__input_container">
                        <label htmlFor="input-email" className="form__label_profile">E-mail</label>
                        <input className={"form__input_profile " + (errors.email ? "form__input_error-color" : "")}
                            id="input-email" name="email" type="email" defaultValue={currentUser.email}
                            required onChange={handleChange} />
                    </div>
                    <span className="form__input_error form__input_error-color" >{errors.email}</span>
                    
                    { isSuccessMessage && <span className="form__input_edit-success" >Данные о пользователе успешно сохранены</span> }

                </fieldset>
            </>
        )
    }

    return (
        <Form name='formProfile' children={renderForm} buttonText='Редактировать' 
            buttonClass="form__profile_submit-button" handleSubmit={saveProfile} 
            isValid={isValid && isFieldsChanged()} errorMessage={errorMessage} />
    )
}

export default FormProfile;