import React from 'react';
import MovieCard from '../MoviesCard/MoviesCard'
import './MoviesCardList.css';


function MoviesCardList(props) {

    return (
        <>
            {props.movies.map((movie, i) => <MovieCard url={movie.url} name={movie.nameRU} icon={movie.icon} duration={movie.duration} key={i} />)}
        </>
    );
}

export default MoviesCardList;