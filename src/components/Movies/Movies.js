import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import moviesApi from '../../utils/MoviesApi';
import mainApi from '../../utils/MainApi';
import { mapMovie, prepareMovieToApi, chooseIcon } from '../../utils/Mapper';
import { ERR_MOVIES_LOADING } from '../../utils/Constant';


function Movies(props) {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const moviesPromise = moviesApi.getMovies().then(movies => movies.map(v => mapMovie(v)));
        const savedMoviesPromise = mainApi.getSavedMovies();

        Promise.all([moviesPromise, savedMoviesPromise])
            .then(([movies, savedMovies]) => movies.map(movie => chooseIcon(movie, savedMovies)))
            .then(movies => setMovies(movies));
    }, []);

    function handleIconClick(movie, setIconState) {
        if (movie.icon === "disabled") {
            mainApi.saveMovie(prepareMovieToApi(movie))
                .then((res) => setIconState("enabled"))
                .catch((err) => props.errorHandler(ERR_MOVIES_LOADING));
        } else {
            mainApi.deleteMovie(movie._id)
                .then((res) => setIconState("disabled"))
                .catch((err) => props.errorHandler(ERR_MOVIES_LOADING));
        }
    }

    function handleSearch(filter) {
        console.log(filter);

    }

    return (
        <>
            <Header loggedIn={true} />
            <SearchForm handleSearch={handleSearch} storageName="movies" />
            <MoviesCardList movies={movies} handleIconClick={handleIconClick} />
            <Footer />
        </>
    );
}

export default Movies;