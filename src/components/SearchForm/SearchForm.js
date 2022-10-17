import React from 'react';
import Tumbler from '../Tumbler/Tumbler';
import './SearchForm.css';


function SearchForm(props) {

    return (
        <div className="searchform">
            <form className="searchform__container">
                <input className="searchform__input" />
                <button className="searchform__button" />
            </form>
            <Tumbler />
            <div className="searchform__underline" />
        </div>
    );
}

export default SearchForm;