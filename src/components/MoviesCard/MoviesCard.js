import React, { useState } from 'react';
import './MoviesCard.css';
import saveBtnDisPath from '../../images/save-button-disabled.svg';
import saveBtnEnPath from '../../images/save-button-enabled.svg';
import deleteBtnPath from '../../images/delete-btn.svg';



function MoviesCard(props) {

    const [icon, setIcon] = useState(props.icon);

    function getBtnStyle(){
        if (icon === "enabled"){
            return "moviescard__button_enabled";
        } else if (icon === "disabled") {
            return "moviescard__button_disabled";
        } else {
            return "moviescard__button_delete";
        }
    }

    return (
        <div className="moviescard__container">
            <div className="moviescard__header">
                <div className="moviescard__info">
                    <h2 className="moviescard__title">{props.name}</h2>
                    <p className="moviescard__duration">{props.duration}</p>
                </div>
                <button className={`moviescard__button ${getBtnStyle()}`} alt="кнопка" />
            </div>

            <img className="moviescard__image" alt="Логотип" src={props.url} />
        </div>
    );
}

export default MoviesCard;