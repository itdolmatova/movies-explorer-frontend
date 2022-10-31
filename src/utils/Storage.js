import { STOR_MOVIES, ICON_DISABLED, ICON_ENABLED } from '../utils/Constant'

export function hasStoredMovies() {
    return localStorage.hasOwnProperty(STOR_MOVIES);
}

export function saveMoviesToStorage(movies) {
    localStorage.setItem(STOR_MOVIES, JSON.stringify(movies));
}

export function retrieveStoredMovies() {
    return JSON.parse(window.localStorage.getItem(STOR_MOVIES));
}

function changeIconInStorage(movie, icon) {
    if (hasStoredMovies()) {
        const changedMovies = retrieveStoredMovies().map((m) => {
            if (m.movieId === movie.movieId) {
                m.icon = icon;
                m._id = movie._id
            }
            return m;
        });
        saveMoviesToStorage(changedMovies);
    }
}

export function disableMovieInStorage(movie) {
    return changeIconInStorage(movie, ICON_DISABLED);
}

export function enableMovieInStorage(movie) {
    return changeIconInStorage(movie, ICON_ENABLED);
}

