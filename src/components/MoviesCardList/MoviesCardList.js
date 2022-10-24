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
                {props.movies
                    .filter(movie => {
                        if ('hidden' in movie && movie.hidden === true) {
                            return false
                        } else {
                            return true;
                        }
                    })
                    .map((movie, i) => <MovieCard data={movie} key={movie.movieId} handleIconClick={props.handleIconClick} />)}
            </div>
            <button type="button" className={`moviescardlist__button ${isMoreButnVisible() ? "" : "moviescardlist__button_hidden"}`}>Ещё</button>
        </>
    );
}

export default MoviesCardList;