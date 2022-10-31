import React, { useState, useEffect } from 'react';
import { useForm } from '../../utils/FormValidator';
import Tumbler from '../Tumbler/Tumbler';
import './SearchForm.css';


function SearchForm(props) {
    const { values, handleChange, setValues } = useForm(props.filter);
    const [isShort, setIsShort] = useState(props.filter ? props.filter.shortMovie : false);
    const [errorMessage, setErrorMessage] = useState("");

    function validateForm(reqMovieName) {
        if (reqMovieName && reqMovieName.length > 0) {
            setErrorMessage("");
            return true;
        } else {
            setErrorMessage("Нужно ввести ключевое слово")
            return false;
        }
    }
    function search(reqMovieName, reqIsShort) {
        const filter = {
            shortMovie: reqIsShort,
            movieName: reqMovieName
        }
        props.handleSearch(filter);

    }

    function handleSearchSubmit(evt) {
        evt.preventDefault();
        if (validateForm(values.movieName))
        search(values.movieName, isShort);
    }

    /*тумблер отделен от формы,
     поэтому при клике на тумблер статус isShort еще не будет содержать нового значения
     значит явно подставляем переданное из тумблера значение
     */
    function handleTumblerClick(shortMov) {
        if (validateForm(values.movieName)) {
            setIsShort(shortMov);
            search(values.movieName, shortMov);
        }
    }

    return (
        <div className="searchform">
            <form className="searchform__container" onSubmit={handleSearchSubmit}>
                <input className="searchform__input" placeholder="Фильм" name="movieName" onChange={handleChange}
                    defaultValue={props.filter ? props.filter.movieName : ""} />
                <button type="submit" className="searchform__button" />
            </form>
            <span className="searchform__error">{errorMessage}</span>
            <Tumbler name="Короткометражки" isOn={isShort} handleChange={handleTumblerClick} />
            <div className="searchform__underline" />
        </div>
    );
}

export default SearchForm;