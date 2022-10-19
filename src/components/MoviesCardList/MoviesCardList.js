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
                {props.movies.map((movie, i) => <MovieCard url={movie.url} name={movie.nameRU} icon={movie.icon} duration={movie.duration} key={i} />)}
            </div>
            <button type="submit" className={`moviescardlist__button ${isMoreButnVisible() ? "" : "moviescardlist__button_hidden"}`}>Ещё</button>
        </>
    );
}

export default MoviesCardList;