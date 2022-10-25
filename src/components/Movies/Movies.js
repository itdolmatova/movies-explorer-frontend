import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import moviesApi from '../../utils/MoviesApi';
import mainApi from '../../utils/MainApi';
import { mapMovie, prepareMovieToApi, chooseIcon } from '../../utils/Mapper';
import { ERR_MOVIES_LOADING } from '../../utils/Constant';
import Preloader from '../Preloader/Preloader';
import { distance } from 'fastest-levenshtein';



function Movies(props) {

    const [movies, setMovies] = useState([]);
    const [isPreloaderVisible, setIsPreloaderVisible] = useState(false);
    const [lastIndex, setLastIndex] = useState(0);
    const [isMoreButnVisible, setIsMoreButnVisible] = useState(false);


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

    function saveMoviesToStorage(movies) {
        localStorage.setItem("moviesBeatfilm", JSON.stringify(movies));
    }

    function showFirstMovies(movies) {
        const countInitialSize = () => {
            if (props.size.width >= 1280) {
                return 12;
            } else if (props.size.width >= 768) {
                return 8;
            } else {
                return 5;
            }
        }
        const initialSize = countInitialSize();
        const firstMovies = movies.slice(0, initialSize);
        if (movies.length > initialSize) setIsMoreButnVisible(true);
        setMovies(firstMovies);
        setLastIndex(movies.length);
    }

    function handleSearch(filter) {
        console.log(filter);
        setIsPreloaderVisible(true);

        const moviesPromise = moviesApi.getMovies()
            .then(movies => movies.map(v => mapMovie(v)))
            .then(movies => {
                if (filter.shortMovie) {
                    return movies.filter(movie => {
                        if (filter.shortMovie === true && movie.duration > 40) {
                            return false;
                        }
                        return true;
                    })
                } else {
                    return movies;
                }
            });
        const savedMoviesPromise = mainApi.getSavedMovies();

        const filterStr = filter.movieName ? filter.movieName.toLowerCase() : "";
        Promise.all([moviesPromise, savedMoviesPromise])
            .then(([movies, savedMovies]) => movies.map(movie => chooseIcon(movie, savedMovies)))
            .then((movies) => {
                if (filter.movieName) {
                    return movies.map(movie => {
                        if (movie.nameEN.toLowerCase().includes(filterStr) || movie.nameRU.toLowerCase().includes(filterStr)) {
                            movie.order = 100;
                        } else {
                            movie.order = Math.max(distance(filterStr, movie.nameEN), distance(filterStr, movie.nameRU));
                        }
                        return movie;
                    });
                } else {
                    return movies;
                }
            })
            .then((movies) => {
                return movies.sort((m1, m2) => { return m2.order - m1.order })
            })
            .then(movies => {
                saveMoviesToStorage(movies);
                showFirstMovies(movies);
            })
            .then(() => setIsPreloaderVisible(false));
    }

    function handleMoreBtnClick() {
        const storageMovies = JSON.parse(localStorage.getItem('moviesBeatfilm'));
        const howMuchAdd = (props.size.width >= 1280) ? 3 : 2;
        const newMovies = movies.concat(storageMovies.slice(lastIndex, lastIndex + howMuchAdd));
        if (storageMovies.length === newMovies.length) setIsMoreButnVisible(false);
        setMovies(newMovies);
        setLastIndex(newMovies.length);
    }

    return (
        <>
            <Header loggedIn={true} />
            <SearchForm handleSearch={handleSearch} storageName="moviesFilter" />
            {isPreloaderVisible && <Preloader />}
            <MoviesCardList movies={movies} handleIconClick={handleIconClick}
                isMoreButnVisible={isMoreButnVisible} handleMoreBtnClick={handleMoreBtnClick} />
            <Footer />
        </>
    );
}

export default Movies;