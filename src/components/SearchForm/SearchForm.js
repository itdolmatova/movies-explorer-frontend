import React from 'react';
import findPath from '../../images/find.svg';
import Tumbler from '../Tumbler/Tumbler';
import './SearchForm.css';


function SearchForm(props) {

    return (
        <>
           <h2>Форма поиска</h2>
           <img className="search__button" alt="Логотип" src={findPath} />
           <Tumbler/>
        </>
    );
}

export default SearchForm;