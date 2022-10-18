import React from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';


function Movies(props) {

    let sampleMovies = [
        {
            url: "https://api.nomoreparties.co/uploads/small_stones_in_exile_b2f1b8f4b7.jpeg",
            duration: "1ч 47м",
            nameRU: "«Роллинг Стоунз» в изгнании",
            icon: "enabled",
        },
        {
            url: "https://api.nomoreparties.co/uploads/small_stones_in_exile_b2f1b8f4b7.jpeg",
            duration: "1ч 47м",
            nameRU: "«Роллинг Стоунз» в изгнании",
            icon: "disabled",
        },
        {
            url: "https://api.nomoreparties.co/uploads/small_stones_in_exile_b2f1b8f4b7.jpeg",
            duration: "1ч 47м",
            nameRU: "«Роллинг Стоунз» в изгнании",
            icon: "disabled",
        },
        {
            url: "https://api.nomoreparties.co/uploads/small_stones_in_exile_b2f1b8f4b7.jpeg",
            duration: "1ч 47м",
            nameRU: "«Роллинг Стоунз» в изгнании",
            icon: "enabled",
        },
        {
            url: "https://api.nomoreparties.co/uploads/small_stones_in_exile_b2f1b8f4b7.jpeg",
            duration: "1ч 47м",
            nameRU: "«Роллинг Стоунз» в изгнании",
            icon: "enabled",
        },
        {
            url: "https://api.nomoreparties.co/uploads/small_stones_in_exile_b2f1b8f4b7.jpeg",
            duration: "1ч 47м",
            nameRU: "«Роллинг Стоунз» в изгнании",
            icon: "enabled",
        },
        {
            url: "https://api.nomoreparties.co/uploads/small_stones_in_exile_b2f1b8f4b7.jpeg",
            duration: "1ч 47м",
            nameRU: "«Роллинг Стоунз» в изгнании",
            icon: "enabled",
        },
        {
            url: "https://api.nomoreparties.co/uploads/small_stones_in_exile_b2f1b8f4b7.jpeg",
            duration: "1ч 47м",
            nameRU: "«Роллинг Стоунз» в изгнании",
            icon: "enabled",
        },
        {
            url: "https://api.nomoreparties.co/uploads/small_stones_in_exile_b2f1b8f4b7.jpeg",
            duration: "1ч 47м",
            nameRU: "«Роллинг Стоунз» в изгнании",
            icon: "enabled",
        },
        {
            url: "https://api.nomoreparties.co/uploads/small_stones_in_exile_b2f1b8f4b7.jpeg",
            duration: "1ч 47м",
            nameRU: "«Роллинг Стоунз» в изгнании",
            icon: "enabled",
        },
        {
            url: "https://api.nomoreparties.co/uploads/small_stones_in_exile_b2f1b8f4b7.jpeg",
            duration: "1ч 47м",
            nameRU: "«Роллинг Стоунз» в изгнании",
            icon: "enabled",
        },
        {
            url: "https://api.nomoreparties.co/uploads/small_stones_in_exile_b2f1b8f4b7.jpeg",
            duration: "1ч 47м",
            nameRU: "«Роллинг Стоунз» в изгнании",
            icon: "enabled",
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

export default Movies;