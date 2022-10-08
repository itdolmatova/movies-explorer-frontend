import React from 'react';
import FormRegister from '../FormRegister/FormRegister';
import HeaderGreeting from '../HeaderGreeting/HeaderGreeting';
import './Register.css';

function Register(props) {



    return (
        <>
        <HeaderGreeting greeting="Добро пожаловать!"/>
        <FormRegister/>
        </>
    );
}

export default Register;