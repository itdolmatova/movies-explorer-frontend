import React from 'react';
import FormRegister from '../FormRegister/FormRegister';
import HeaderGreeting from '../HeaderGreeting/HeaderGreeting';
import './Register.css';

function Register(props) {



    return (
        <>
        <HeaderGreeting greeting="Добро пожаловать!"/>
        <FormRegister handleLogin={props.handleLogin}/>
        <div className="register__navi">
                <h2 className="register__navi_text">Уже зарегистрированы?</h2>
                <a className="register__navi_link" href="/sign-in">Войти</a>
            </div>
        </>
    );
}

export default Register;
