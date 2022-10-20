class MainApi {
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

    postUserInfo(values) {
        return fetch(this._baseUrl + '/users/me', {
            method: 'PATCH',
            headers: this._getHeaders(),
            body: JSON.stringify (values)
        })
            .then(this._checkResponse);
    }

    getUserInfo() {
        return fetch(this._baseUrl + '/users/me', {
            headers: this._getHeaders(),
        })
            .then(this._checkResponse);
    }

    saveMovie(movieId) {
        return fetch(this._baseUrl + `/cards/${movieId}/likes`, {
            method: 'PUT',
            headers: this._getHeaders(),
        })
            .then(this._checkResponse);
    }

    deleteMovie(movieId) {
        return fetch(this._baseUrl + `/cards/${movieId}/likes`, {
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