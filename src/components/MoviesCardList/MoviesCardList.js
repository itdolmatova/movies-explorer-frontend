import React from 'react';
import MovieCard from '../MoviesCard/MoviesCard'
import './MoviesCardList.css';


function MoviesCardList(props) {
    function isMoreButnVisible() {
        return props.movies.length > 4
    }

    return (
        <>
            <div className="moviescardlist__container">
                {props.movies.map((movie, i) => <MovieCard data={movie} key={movie.movieId} handleIconClick={props.handleIconClick} />)}
            </div>
            <button type="button" className={`moviescardlist__button ${isMoreButnVisible() ? "" : "moviescardlist__button_hidden"}`}>Ещё</button>
        </>
    );
}

export default MoviesCardList;