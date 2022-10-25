import React, { useState } from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';
import Movies from './Movies/Movies'
import Profile from './Profile/Profile'
import Register from './Register/Register'
import SavedMovies from './SavedMovies/SavedMovies'
import Login from './Login/Login'
import NotFound from './NotFound/NotFound'
import Main from './Main/Main'
import ErrorPopup from './ErrorPopup/ErrorPopup';
import mainApi from '../utils/MainApi';
import { CurrentUserContext } from '../context/CurrentUserContext';
import { useWindowSize } from '../utils/WindowSize';
import './App.css';

function App() {
  const [isErrorPopupOpen, setErrorPopupOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [currentUser, setCurrentUser] = useState({ name: "", email: "" });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const history = useHistory();
  const size = useWindowSize();

  function loadUserData(token) {
    return mainApi.getUser().then((res) => {
      setCurrentUser(res);
      setIsLoggedIn(true);
    });
  }

  React.useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      loadUserData(token)
        .then(() => history.push('/movies'))
        .catch(err => handleError(err));
    }
  }, []);

  function handleLogin(token) {
    localStorage.setItem('token', token);
    return loadUserData(token);
  }

  function handleLogout() {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  }

  function handleError(message) {
    setErrorMessage(message);
    setErrorPopupOpen(true);
  }

  function closeErrorPopup() {
    setErrorPopupOpen(false);
  }

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <div className="page__content">

          <Switch>


            <Route exact path="/">
              <Main />
            </Route>

            <ProtectedRoute path="/movies" loggedIn={isLoggedIn} component={Movies} errorHandler={handleError} size={size}/>

            <ProtectedRoute path="/saved" loggedIn={isLoggedIn} component={SavedMovies} errorHandler={handleError} />

            <ProtectedRoute path="/profile" loggedIn={isLoggedIn} component={Profile} setCurrentUser={setCurrentUser} handleLogout={handleLogout} />

            <Route path="/sign-in">
              <Login handleLogin={handleLogin} />
            </Route>

            <Route path="/sign-up">
              <Register handleLogin={handleLogin} />
            </Route>

            <Route exact path="/404">
              <NotFound />
            </Route>

            <Route path="*">
              <NotFound />
            </Route>

          </Switch>

          <ErrorPopup isOpen={isErrorPopupOpen} message={errorMessage} onClose={closeErrorPopup} />
        </div>

      </CurrentUserContext.Provider >

    </div >
  );
}

export default App;
