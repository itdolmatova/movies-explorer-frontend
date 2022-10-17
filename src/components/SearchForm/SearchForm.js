import React from 'react';
import Tumbler from '../Tumbler/Tumbler';
import './SearchForm.css';


function SearchForm(props) {

    return (
        <div className="searchform">
            <form className="searchform__container">
                <input className="searchform__input" placeholder="Фильм"/>
                <button className="searchform__button" />
            </form>
            <Tumbler name="Короткометражки" />
            <div className="searchform__underline" />
        </div>
    );
}

export default SearchForm;