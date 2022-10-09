import React from 'react';
import FormProfile from '../FormProfile/FormProfile';
import './Profile.css';

function Profile(props) {
    return (
        <div className="profile">
            <h1 className="profile__greeting">Привет, Анастасия!</h1>
            <FormProfile />
            <a className="profile__link">Выйти из аккаунта</a>
        </div>
    );
}

export default Profile;