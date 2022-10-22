import './App.css';
import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Movies from './Movies/Movies'
import Profile from './Profile/Profile'
import Register from './Register/Register'
import SavedMovies from './SavedMovies/SavedMovies'
import Login from './Login/Login'
import NotFound from './NotFound/NotFound'
import Main from './Main/Main'
import ErrorPopup from './ErrorPopup/ErrorPopup'

function App() {
  const [isErrorPopupOpen, setErrorPopupOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  function handleError(message) {
    setErrorMessage(message);
    setErrorPopupOpen(true);
  }
  
  function closeErrorPopup (){
    setErrorPopupOpen(false);
  }

  return (
    <div className="page">
      <div className="page__content">

        <Switch>

          <Route exact path="/404">
            <NotFound />
          </Route>

          <Route exact path="/">
            <Main />
          </Route>

          <Route exact path="/movies">
            <Movies errorHandler={handleError}/>
          </Route>

          <Route exact path="/saved">
            <SavedMovies />
          </Route>

          <Route exact path="/profile">
            <Profile />
          </Route>

          <Route path="/sign-in">
            <Login />
          </Route>

          <Route path="/sign-up">
            <Register />
          </Route>


        </Switch>

        <ErrorPopup isOpen={isErrorPopupOpen} message={errorMessage} onClose={closeErrorPopup}/>
      </div>


    </div>
  );
}

export default App;
