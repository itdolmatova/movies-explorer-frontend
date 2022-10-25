import React from 'react';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import FormProfile from '../FormProfile/FormProfile';
import './Profile.css';

function Profile(props) {

    const currentUser = React.useContext(CurrentUserContext);
    function handleLogoutClick() {
        props.handleLogout();
    }

    return (
        <>
            <Header loggedIn={true} />
            <div className="profile">
                <h1 className="profile__greeting">{`Привет, ${currentUser.name}!`}</h1>
                <FormProfile setCurrentUser={props.setCurrentUser}/>
                <Link to="/" className="profile__link" onClick={handleLogoutClick}>Выйти из аккаунта</Link>
            </div>
        </>
    );
}

export default Profile;