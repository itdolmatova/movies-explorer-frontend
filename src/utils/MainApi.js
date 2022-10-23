class MainApi {
    constructor(options) {
        this._baseUrl = options.baseUrl;
    }

    _getHeaders = () => {
        return {
            "Authorization": `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json'
        }
    }

    _checkResponse = (res) => {
        if (res.ok) {
            return res.json();
        } else if (res.status === 409 || res.status === 401 || res.status === 404 || res.status === 400) {
            return res.json().then((body) => Promise.reject(body.message))
        }
       
        return Promise.reject(`Ошибка: ${res.status}`);
    };

    createUser(name, email, password) {
        return fetch(this._baseUrl + '/signup', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password })
        })
            .then(this._checkResponse);
    };

    login(email, password) {
        return fetch(this._baseUrl + '/signin', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
            .then(this._checkResponse);
    };


    updateUser(values) {
        return fetch(this._baseUrl + '/users/me', {
            method: 'PATCH',
            headers: this._getHeaders(),
            body: JSON.stringify(values)
        })
            .then(this._checkResponse);
    }

    getUser() {
        return fetch(this._baseUrl + '/users/me', {
            headers: this._getHeaders(),
        })
            .then(this._checkResponse);
    }

    saveMovie(movie) {
        return fetch(this._baseUrl + `/movies`, {
            method: 'POST',
            headers: this._getHeaders(),
            body: JSON.stringify(movie)
        })
            .then(this._checkResponse);
    }

    getSavedMovies() {
        return fetch(this._baseUrl + '/movies', {
            headers: this._getHeaders(),
        })
            .then(this._checkResponse);
    }

    deleteMovie(movieId) {
        return fetch(this._baseUrl + `/movies/${movieId}`, {
            method: 'DELETE',
            headers: this._getHeaders(),
        })
            .then(this._checkResponse);
    }
}

const mainApi = new MainApi({
    baseUrl: 'https://api.movies.itdolmatova.nomorepartiesxyz.ru',
});

export default mainApi;