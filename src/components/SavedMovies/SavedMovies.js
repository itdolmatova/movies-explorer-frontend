import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import mainApi from '../../utils/MainApi';
import { ERR_MOVIES_LOADING } from '../../utils/Constant';

function SavedMovies(props) {
    const [movies, setMovies] = useState([]);
    const [filter, setFilter] = useState({});

    useEffect(() => {
        mainApi.getSavedMovies().then(movies => setMovies(movies));
    }, []);

    function handleIconClick(movie) {
        mainApi.deleteMovie(movie._id)
            .then(() => setMovies(prevMovies => prevMovies.filter((m) => m._id !== movie._id)))
            .catch((err) => props.errorHandler(ERR_MOVIES_LOADING));
    }

    function handleSearch(filter) {
        setFilter(filter);
    }

    function getFilteredMovies() {
        return movies.filter(movie => {
            if (filter.movieName && filter.movieName.length > 0) {
                const movNameIncludes = movie.nameRU.toLowerCase().includes(filter.movieName.toLowerCase()) || movie.nameEN.toLowerCase().includes(filter.movieName.toLowerCase());
                if (!movNameIncludes) return false;
            }

            if (filter.shortMovie === true && movie.duration > 40) {
                return false;
            }
            return true;
        });
    }

    return (
        <>
            <Header loggedIn={true} />
            <SearchForm handleSearch={handleSearch} storageName="saved" />
            <MoviesCardList movies={getFilteredMovies()} handleIconClick={handleIconClick} />
            <Footer />
        </>
    );
}

export default SavedMovies;
