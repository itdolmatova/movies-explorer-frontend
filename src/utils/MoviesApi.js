class MoviesApi {
    constructor(options) {
        this._baseUrl = options.baseUrl;
    }

    _getHeaders = () => {
        return  {
            "Authorization": `Bearer ${localStorage.getItem('token')}`,
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
        return fetch(this._baseUrl + '/movies', {
            headers: this._getHeaders(),
        })
            .then(this._checkResponse);
    }
}

const moviesApi = new MoviesApi({
    baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
  });

export default moviesApi;   