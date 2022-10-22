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
        thumbnail: v.image.formats.thumdnail,
        movieId: v.id,
    };
}

export const chooseIcon = (movie, savedMovies) => {
    movie.icon = "disabled";
    return movie;
}