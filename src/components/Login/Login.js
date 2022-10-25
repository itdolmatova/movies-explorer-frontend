import React from 'react';
import FormLogin from '../FormLogin/FormLogin';
import HeaderGreeting from '../HeaderGreeting/HeaderGreeting';
import './Login.css';

function Login(props) {



    return (
        <>
            <HeaderGreeting greeting="Рады видеть!" />
            <FormLogin />
            <div className="login__navi">
                <h2 className="login__navi_text">Еще не зарегистрированы?</h2>
                <a className="login__navi_link" href="/sign-up">Регистрация</a>
            </div>
        </>
    );
}

export default Login;