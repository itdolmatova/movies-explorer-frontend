import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import moviesApi from '../../utils/MoviesApi';
import mainApi from '../../utils/MainApi';
import { mapMovie, chooseIcon } from '../../utils/Mapper';
import { ERR_MOVIES_LOADING } from '../../utils/Constant';


function Movies(props) {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        moviesApi.getMovies().then(movies => movies.map(v => mapMovie(v))).then(movies => movies.map(v => chooseIcon(v))).then(movies => setMovies(movies));
    }, []);
    
    function handleIconClick(movie) {
        mainApi.saveMovie(movie).catch((err) => props.errorHandler(ERR_MOVIES_LOADING));
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

export default Movies;