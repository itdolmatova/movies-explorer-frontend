import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import moviesApi from '../../utils/MoviesApi';
import mainApi from '../../utils/MainApi';
import { mapMovie, prepareMovieToApi, chooseIcon } from '../../utils/Mapper';
import { ERR_MOVIES_LOADING, STOR_MOVIES_FILTER, STOR_MOVIES, DESKTOP_SIZE, TABLET_SIZE, SHORT_MOVIE_LENGTH,
    DESKTOP_QUANTITY_MOVIES, TABLET_QUANTITY_MOVIES, DESKTOP_INITIAL_QUANTITY, TABLET_INITIAL_QUANTITY,
    MOBILE_INITIAL_QUANTITY } from '../../utils/Constant';
import Preloader from '../Preloader/Preloader';

function Movies(props) {

    const [movies, setMovies] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [isPreloaderVisible, setIsPreloaderVisible] = useState(false);
    const [lastIndex, setLastIndex] = useState(0);
    const [isMoreButnVisible, setIsMoreButnVisible] = useState(false);
    const [isNoMovies, setIsNoMovies] = useState(false);

    useEffect(() => {
        if (hasStoredMovies()) showFirstMovies(retrieveFilteredStoredMovies());
    }, [])

    function saveFilter(filter) {
        localStorage.setItem(STOR_MOVIES_FILTER, JSON.stringify(filter));
    }

    function retrieveFilter() {
        if (localStorage.getItem(STOR_MOVIES_FILTER)) {
            const newObject = window.localStorage.getItem(STOR_MOVIES_FILTER);
            return JSON.parse(newObject);
        } else {
            return {
                shortMovie: false,
                movieName: ""
            }
        }
    }

    function hasStoredMovies() {
        return localStorage.hasOwnProperty(STOR_MOVIES);
    }

    function saveMoviesToStorage(movies) {
        localStorage.setItem(STOR_MOVIES, JSON.stringify(movies));
    }

    function retrieveStoredMovies() {
        return JSON.parse(window.localStorage.getItem(STOR_MOVIES));
    }

    function retrieveFilteredStoredMovies() {
        return filterMovies(retrieveStoredMovies(), retrieveFilter());
    }

    function showFirstMovies(movies) {
        const countInitialSize = () => {
            if (props.size.width >= DESKTOP_SIZE) {
                return DESKTOP_INITIAL_QUANTITY;
            } else if (props.size.width >= TABLET_SIZE) {
                return TABLET_INITIAL_QUANTITY;
            } else {
                return MOBILE_INITIAL_QUANTITY;
            }
        }
        const initialSize = countInitialSize();
        const firstMovies = movies.slice(0, initialSize);
        if (movies.length > initialSize) {
            setIsMoreButnVisible(true);
        } else {
            setIsMoreButnVisible(false);
        }
        setMovies(firstMovies);
        setFilteredMovies(movies);
        setLastIndex(firstMovies.length);
        if (movies.length === 0) {
            setIsNoMovies(true);
        } else {
            setIsNoMovies(false);
        }
    }

    function checkMovieName(movie, filter) {
        const filterStr = filter.movieName ? filter.movieName.toLowerCase() : "";
        if (filter.movieName) {
            if (movie.nameEN.toLowerCase().includes(filterStr) || movie.nameRU.toLowerCase().includes(filterStr)) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        };
    }

    function checkMovieDuration(movie, filter) {
        if (filter.shortMovie === true && movie.duration > SHORT_MOVIE_LENGTH) {
            return false;
        } else {
            return true;
        }
    }

    function filterMovies(movies, filter) {
        return movies.filter(movie => {
            return checkMovieName(movie, filter) && checkMovieDuration(movie, filter)
        });
    }

    function handleSearch(filter) {
        console.log(filter);
        saveFilter(filter);
        setMovies([]);
        
        if (!hasStoredMovies()) {
            setIsPreloaderVisible(true);

            const savedMoviesPromise = mainApi.getSavedMovies();
            const moviesPromise = moviesApi.getMovies()
                .then(movies => movies.map(v => mapMovie(v)));

            Promise.all([moviesPromise, savedMoviesPromise])
                .then(([movies, savedMovies]) => movies.map(movie => chooseIcon(movie, savedMovies)))
                .then((movies) => {
                    saveMoviesToStorage(movies);
                    //showFirstMovies(filterMovies(movies, filter));
                    showFirstMovies(retrieveFilteredStoredMovies());
                    setIsPreloaderVisible(false);
                })
                .catch((err) => {
                    if (mainApi.isUnauthorized(err)) {
                        props.handleLogout();
                    } else {
                        props.errorHandler(err);
                    }
                });
        } else {
            showFirstMovies(retrieveFilteredStoredMovies());
        }
    }

    function handleMoreBtnClick() {
        const howMuchAdd = (props.size.width >= DESKTOP_SIZE) ? DESKTOP_QUANTITY_MOVIES : TABLET_QUANTITY_MOVIES;
        const newMovies = movies.concat(filteredMovies.slice(lastIndex, lastIndex + howMuchAdd));
        console.log("nasta0",filteredMovies.slice(lastIndex, lastIndex + howMuchAdd));
        if (filteredMovies.length === newMovies.length) setIsMoreButnVisible(false);
        console.log("nastiacgbn",filteredMovies, newMovies, lastIndex, howMuchAdd);
        setMovies(newMovies);
        setLastIndex(newMovies.length);
    }

    function handleIconClick(movie, setIconState) {
        if (movie.icon === "disabled") {
            mainApi.saveMovie(prepareMovieToApi(movie))
                .then((res) => setIconState("enabled", res))
                .catch((err) => {
                    if (mainApi.isUnauthorized(err)) {
                        props.handleLogout();
                    } else {
                        props.errorHandler(ERR_MOVIES_LOADING);
                    }
                });
        } else {
            mainApi.deleteMovie(movie._id)
                .then((res) => setIconState("disabled"))
                .catch((err) => {
                    if (mainApi.isUnauthorized(err)) {
                        props.handleLogout();
                    } else {
                        props.errorHandler(ERR_MOVIES_LOADING);
                    }
                });
        }
    }

    return (
        <>
            <Header />
            <SearchForm handleSearch={handleSearch} storageName={STOR_MOVIES_FILTER} filter={retrieveFilter()} />
            {isPreloaderVisible && <Preloader />}
            <MoviesCardList movies={movies} handleIconClick={handleIconClick}
                isMoreButnVisible={isMoreButnVisible} isNoMovies={isNoMovies} handleMoreBtnClick={handleMoreBtnClick} />
            <Footer />
        </>
    );
}

export default Movies;