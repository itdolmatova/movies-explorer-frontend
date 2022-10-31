import { MOVIES_URL } from "./Constant";

class MoviesApi {
    constructor(options) {
        this._baseUrl = options.baseUrl;
    }

    _getHeaders = () => {
        return  {
            'Content-Type': 'application/json'
        }
    }

    _checkResponse = (res) => {
        if (res.ok) {
            return res.json();
        }

        return Promise.reject(`Ошибка: ${res.status}`);
    };

    getMovies() {
        return fetch(this._baseUrl + '/beatfilm-movies', {
            headers: this._getHeaders(),
        })
            .then(this._checkResponse);
    }
}

const moviesApi = new MoviesApi({
    baseUrl: MOVIES_URL,
  });

export default moviesApi;   