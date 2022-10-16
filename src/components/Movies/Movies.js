import React from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import './Movies.css';


function Movies(props) {

    return (
        <>
           <Header/>
           <SearchForm/>
           <Footer/>
        </>
    );
}

export default Movies;