import React, { useState } from 'react';
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

    function setIconState(state) {
        setIcon(state);
        props.data.icon = state;
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

            <img className="moviescard__image" alt="Картинка" src={props.data.image} />
        </div>
    );
}

export default MoviesCard;