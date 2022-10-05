import './App.css';
import React, { useState } from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import Movies from './Movies/Movies'
import Profile from './Profile/Profile'
import Register from './Register/Register'
import SavedMovies from './SavedMovies/SavedMovies'
import Login from './Login/Login'
import NotFound from './NotFound/NotFound'
import Main from './Main/Main'

function App() {
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
            <Movies />
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

      </div>


    </div>
  );
}

export default App;
