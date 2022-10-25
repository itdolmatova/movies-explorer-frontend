import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import moviesApi from '../../utils/MoviesApi';
import mainApi from '../../utils/MainApi';
import { mapMovie, prepareMovieToApi, chooseIcon } from '../../utils/Mapper';
import { useWindowSize } from '../../utils/WindowSize';
import { ERR_MOVIES_LOADING } from '../../utils/Constant';
import Preloader from '../Preloader/Preloader';
import { stringSimilarity } from 'string-similarity-js';
import CyrillicToTranslit from 'cyrillic-to-translit-js';



function Movies(props) {
    
    const [movies, setMovies] = useState([]);
    const [isPreloaderVisible, setIsPreloaderVisible] = useState(false);
    const size = useWindowSize();
    
    useEffect(() => {
        

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

    const cyrillicToTranslit = new CyrillicToTranslit();
    function handleSearch(filter) {
        setIsPreloaderVisible(true);
        const moviesPromise = moviesApi.getMovies().then(movies => movies.map(v => mapMovie(v)));
        const savedMoviesPromise = mainApi.getSavedMovies();

        Promise.all([moviesPromise, savedMoviesPromise])
        .then(([movies, savedMovies]) => movies.map(movie => chooseIcon(movie, savedMovies)))
        .then((movies) => {
                if (filter.movieName) {
                    const filterStr = cyrillicToTranslit.transform(filter.movieName);
                    console.log(filterStr);
                    const sorted = movies.sort((m1, m2) => {
                        const s1 = stringSimilarity(filterStr, m1.nameEN + cyrillicToTranslit.transform(m1.nameRU));
                        const s2 = stringSimilarity(filterStr, m2.nameEN + cyrillicToTranslit.transform(m2.nameRU));
                       // console.log(s1, s2);
                        return s1 - s2;
                    });
                    console.log("sorted", sorted);
                    return sorted;
                }
                return movies;
            })

            .then(movies => setMovies(movies));

        //load movies from api 
        //filter movies 
        //save movies to local storage 
        //put to setMovies() first n films 
        console.log("movies handleSearch", filter);

    }

    function handleMoreBtnClick() {
        //load more or hide btn 
        console.log("width", size.width);
    }

    return (
        <>
            <Header loggedIn={true} />
            <SearchForm handleSearch={handleSearch} storageName="moviesFilter" />
            {isPreloaderVisible && <Preloader />}
            <MoviesCardList movies={movies} handleIconClick={handleIconClick}
                isMoreButnVisible={true} handleMoreBtnClick={handleMoreBtnClick} />
            <Footer />
        </>
    );
}

export default Movies;