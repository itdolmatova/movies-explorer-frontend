import React from 'react';
import MovieCard from '../MoviesCard/MoviesCard'
import './MoviesCardList.css';


function MoviesCardList(props) {

    return (
        <>
            <div className="moviescardlist__container">
                {props.movies.map((movie, i) => <MovieCard data={movie} key={movie.movieId} handleIconClick={props.handleIconClick} />)}
            </div>
            <button type="button" onClick={props.handleMoreBtnClick}
                className={`moviescardlist__button ${props.isMoreButnVisible ? "" : "moviescardlist__button_hidden"}`}>Ещё</button>
        </>
    );
}

export default MoviesCardList;