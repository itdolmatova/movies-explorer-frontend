import React, { useState, useEffect } from 'react';
import { useForm } from '../../utils/FormValidator';
import Tumbler from '../Tumbler/Tumbler';
import './SearchForm.css';


function SearchForm(props) {
    function saveFilter(filter) {
        localStorage.setItem(props.storageName, JSON.stringify(filter));
    }

    function hasFilter() {
        return localStorage.hasOwnProperty(props.storageName);
    }

    function retrieveFilter() {
        if (localStorage.getItem(props.storageName)) {
            const newObject = window.localStorage.getItem(props.storageName);
            return JSON.parse(newObject);
        } else {
            return {
                shortMovie: false,
                movieName: ""
            }
        }
    }

    const { values, handleChange, setValues } = useForm();
    const [isShort, setIsShort] = useState(retrieveFilter().shortMovie);

    useEffect(() => {
        if (hasFilter()) { //if filter doesnt exist dont call CardList
            const filter = retrieveFilter();
            props.handleSearch(filter);
        }
    }, []);

    function search(filter) {
        props.handleSearch(filter);
        saveFilter(filter)
    }

    function handleSearchSubmit(evt) {
        evt.preventDefault();
        const filter = {
            shortMovie: isShort,
            movieName: values.movieName
        }
        search(filter);
    }

    /*тумблер отделен от формы,
     поэтому при клике на тумблер статус isShort еще не будет содержать нового значения
     значит явно подставляем переданное из тумблера значение
     */
    function handleTumblerClick(shortMov) {
        setIsShort(shortMov);
        const filter = {
            shortMovie: shortMov,
            movieName: values.movieName
        }
        search(filter);
    }

    return (
        <div className="searchform">
            <form className="searchform__container" onSubmit={handleSearchSubmit}>
                <input className="searchform__input" placeholder="Фильм" name="movieName" onChange={handleChange} required defaultValue={retrieveFilter().movieName} />
                <button type="submit" className="searchform__button" />
            </form>
            <Tumbler name="Короткометражки" isOn={isShort} handleChange={handleTumblerClick} />
            <div className="searchform__underline" />
        </div>
    );
}

export default SearchForm;