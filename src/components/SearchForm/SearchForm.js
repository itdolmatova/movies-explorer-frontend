import React, { useState, useEffect } from 'react';
import { useFormWithValidation } from '../../utils/FormValidator';
import Tumbler from '../Tumbler/Tumbler';
import './SearchForm.css';


function SearchForm(props) {
    const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();
    const [isShort, setIsShort] = useState(props.filter ? props.filter.shortMovie : false);


    function handleSearchSubmit(evt) {
        evt.preventDefault();
        const filter = {
            shortMovie: isShort,
            movieName: values.movieName ? values.movieName : props.filter.movieName
        }
        props.handleSearch(filter);
    }

    /*тумблер отделен от формы,
     поэтому при клике на тумблер статус isShort еще не будет содержать нового значения
     значит явно подставляем переданное из тумблера значение
     */
    function handleTumblerClick(shortMov) {
        setIsShort(shortMov);
        const filter = {
            shortMovie: shortMov,
            movieName: values.movieName ? values.movieName : props.filter.movieName
        }
        props.handleSearch(filter);
    }

    return (
        <div className="searchform">
            <form className="searchform__container" onSubmit={handleSearchSubmit}>
                <input className="searchform__input" placeholder="Фильм" name="movieName" onChange={handleChange}
                    required defaultValue={props.filter ? props.filter.movieName : ""} />
                <button type="submit" className="searchform__button" disabled={isValid ? false : true} />
            </form>
            <span className="searchform__error">{errors.movieName}</span>
            <Tumbler name="Короткометражки" isOn={isShort} handleChange={handleTumblerClick} />
            <div className="searchform__underline" />
        </div>
    );
}

export default SearchForm;