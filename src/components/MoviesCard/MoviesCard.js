import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MoviesCard.css';


function MoviesCard(props) {

    const [icon, setIcon] = useState(props.data.icon);

    function getBtnStyle() {
        if (icon === "enabled") {
            return "moviescard__button_enabled";
        } else if (icon === "disabled") {
            return "moviescard__button_disabled";
        } else {
            return "moviescard__button_delete";
        }
    }
    function calcDuration(value) {
        return `${Math.floor(value / 60)}ч ${value % 60}м`
    }

    function setIconState(state, movie) {
        setIcon(state);
        props.data.icon = state;
        if(movie) props.data._id = movie._id;
    }

    function handleClick() {
        props.handleIconClick(props.data, setIconState);
    }

    return (
        <div className="moviescard__container">
            <div className="moviescard__header">
                <div className="moviescard__info">
                    <h2 className="moviescard__title">{props.data.nameRU}</h2>
                    <p className="moviescard__duration">{calcDuration(props.data.duration)}</p>
                </div>
                <button type="button" className={`moviescard__button ${getBtnStyle()}`} alt="кнопка" onClick={handleClick} />
            </div>

            <Link to={{pathname: props.data.trailer}} className="moviescard__link" target="_blank" />
            <img className="moviescard__image" alt="Картинка" src={props.data.image} />
        </div>
    );
}

export default MoviesCard;