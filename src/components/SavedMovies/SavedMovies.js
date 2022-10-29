import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import mainApi from '../../utils/MainApi';
import { ERR_MOVIES_LOADING, ICON_DISABLED } from '../../utils/Constant';
import { disableMovieInStorage } from '../../utils/Storage';

function SavedMovies(props) {
    const [movies, setMovies] = useState([]);
    const [filter, setFilter] = useState({});

    useEffect(() => {
        mainApi.getSavedMovies()
            .then(movies => setMovies(movies))
            .catch((err) => {
                if (mainApi.isUnauthorized(err)) {
                    props.handleLogout();
                } else {
                    props.errorHandler(ERR_MOVIES_LOADING);
                }
            });
    }, []);

    function handleIconClick(movie) {
        mainApi.deleteMovie(movie._id)
            .then((res) => {
                disableMovieInStorage(movie);
                setMovies(prevMovies => prevMovies.filter((m) => m._id !== movie._id));
            })
            .catch((err) => {
                if (mainApi.isUnauthorized(err)) {
                    props.handleLogout();
                } else {
                    props.errorHandler(ERR_MOVIES_LOADING);
                }
            });
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
            <Header />
            <SearchForm handleSearch={handleSearch} />
            <MoviesCardList movies={getFilteredMovies()} handleIconClick={handleIconClick} />
            <Footer />
        </>
    );
}

export default SavedMovies;
