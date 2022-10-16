import React from 'react';
import './MoviesCard.css';


function MoviesCard(props) {

    return (
        <>
           <h2>{props.name}</h2>
           <h2>{props.duration}</h2>
           <img className="search__button" alt="Логотип" src={props.url} />
        </>
    );
}

export default MoviesCard;