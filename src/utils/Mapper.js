import { MOVIES_URL } from "./Constant";
export const mapMovie = (v) => {
    return {
        country: v.country,
        director: v.director,
        duration: v.duration,
        year: v.year,
        description: v.description,
        image: `${MOVIES_URL}${v.image.url}`,
        trailerLink: v.trailerLink,
        nameRU: v.nameRU,
        nameEN: v.nameEN,
        thumbnail: `${MOVIES_URL}${v.image.formats.thumbnail.url}`,
        movieId: v.id,
    };
}

export const chooseIcon = (movie, savedMovies) => {
    const result = savedMovies.find(e => e.movieId === movie.movieId);
    if (result) { 
        movie.icon = "enabled";
        movie._id = result._id;
    } else {
        movie.icon = "disabled";
    }
    return movie;
}

export const prepareMovieToApi = ({ country, director, duration, year, description, image, trailerLink, nameRU, nameEN, thumbnail, movieId }) => {
    return { country, director, duration, year, description, image, trailerLink, nameRU, nameEN, thumbnail, movieId };
}