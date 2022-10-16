import React from 'react';
import MovieCard from '../MoviesCard/MoviesCard'
import './MoviesCardList.css';


function MoviesCardList(props) {

    return (
        <>
            {props.movies.map((movie, i) => <MovieCard url={movie.url} name={movie.nameRU} duration={movie.duration} key={i} />)}
        </>
    );
}

export default MoviesCardList;