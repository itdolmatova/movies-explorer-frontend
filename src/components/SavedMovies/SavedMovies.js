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

    function handleSearch(filter) {
        console.log(filter);
        const newMovies = movies.map(movie => {
            movie.hidden = false;

            if (filter.movieName && filter.movieName.length > 0) {
                const movNameIncludes = movie.nameRU.toLowerCase().includes(filter.movieName.toLowerCase()) || movie.nameEN.toLowerCase().includes(filter.movieName.toLowerCase());
                movie.hidden = !movNameIncludes;
            }

            if (filter.shortMovie === true && movie.duration > 40) {
                movie.hidden = true;
            }
            return movie
        });
        console.log(newMovies);
        setMovies(newMovies);
    }

    return (
        <>
            <Header loggedIn={true} />
            <SearchForm handleSearch={handleSearch}  storageName="saved" />
            <MoviesCardList movies={movies} handleIconClick={handleIconClick} />
            <Footer />
        </>
    );
}

export default SavedMovies;
