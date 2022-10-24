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
import moviesApi from '../utils/MoviesApi';
import { CurrentUserContext } from '../context/CurrentUserContext';
import './App.css';

function App() {
  const [isErrorPopupOpen, setErrorPopupOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [currentUser, setCurrentUser] = useState({ name: "", email: "" });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [movies, setMovies] = useState([]);
  const history = useHistory();


  React.useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      mainApi.getUser().then((res) => {
        setCurrentUser(res);
        setIsLoggedIn(true);
        history.push('/movies');
      }).catch(err => console.log(err));
    }
  }, [])


  React.useEffect(() => {
    if (isLoggedIn) {
      moviesApi.getMovies().then(movies => {
        setMovies(movies);
      }).catch(err => console.log(err));
    }
  }, [isLoggedIn])


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

          <Route exact path="/404">
            <NotFound />
          </Route>

          <Route exact path="/">
            <Main />
          </Route>

          <Route exact path="/movies">
            <Movies errorHandler={handleError} />
          </Route>

          <Route exact path="/saved">
            <SavedMovies errorHandler={handleError} />
          </Route>

          <Route exact path="/profile">
            <Profile setCurrentUser={setCurrentUser}/>
          </Route>

          <Route path="/sign-in">
            <Login />
          </Route>

          <Route path="/sign-up">
            <Register />
          </Route>


        </Switch>

        <ErrorPopup isOpen={isErrorPopupOpen} message={errorMessage} onClose={closeErrorPopup} />
      </div>

      </CurrentUserContext.Provider>

    </div>
  );
}

export default App;
