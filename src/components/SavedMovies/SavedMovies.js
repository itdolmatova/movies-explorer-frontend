import React from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import './SavedMovies.css';


function SavedMovies(props) {

    let sampleMovies = [
        {
            url: "https://api.nomoreparties.co/uploads/small_stones_in_exile_b2f1b8f4b7.jpeg",
            duration: "105",
            nameRU: "«Роллинг Стоунз» в изгнании",
        },
        {
            url: "https://api.nomoreparties.co/uploads/small_stones_in_exile_b2f1b8f4b7.jpeg",
            duration: "105",
            nameRU: "«Роллинг Стоунз» в изгнании",
        },
        {
            url: "https://api.nomoreparties.co/uploads/small_stones_in_exile_b2f1b8f4b7.jpeg",
            duration: "105",
            nameRU: "«Роллинг Стоунз» в изгнании",
        },
        
    ];


    return (
        <>
            <Header loggedIn={true} />
            <SearchForm />
            <MoviesCardList movies={sampleMovies} />
            <Footer />
        </>
    );
}

export default SavedMovies;