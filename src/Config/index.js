
export default class Config {
    constructor() {
        this._config = {
            API_HOST: 'https://api.themoviedb.org/3',
            API_KEY: '14132d8640fef6aabbad8e44a58206f8'
        }
    }
    get(key) {
        return this._config[key]
    }
}