import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import mainApi from '../../utils/MainApi';
import { ERR_MOVIES_LOADING } from '../../utils/Constant';

function SavedMovies(props) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        mainApi.getSavedMovies().then(movies => setMovies(movies));
    }, []);

    function handleIconClick(movie) {
        mainApi.deleteMovie(movie._id)
            .then(() => setMovies(prevMovies => prevMovies.filter((m) => m._id !== movie._id)))
            .catch((err) => props.errorHandler(ERR_MOVIES_LOADING));
    }

    return (
        <>
            <Header loggedIn={true} />
            <SearchForm />
            <MoviesCardList movies={movies} handleIconClick={handleIconClick} />
            <Footer />
        </>
    );
}

export default SavedMovies;
