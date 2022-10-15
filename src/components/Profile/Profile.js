import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import FormProfile from '../FormProfile/FormProfile';
import './Profile.css';

function Profile(props) {
    return (
        <>
            <Header loggedIn={true} />
            <div className="profile">
                <h1 className="profile__greeting">Привет, Анастасия!</h1>
                <FormProfile />
                <Link to="/" className="profile__link">Выйти из аккаунта</Link>
            </div>
        </>
    );
}

export default Profile;