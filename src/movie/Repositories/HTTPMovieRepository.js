import MovieRepository from './MovieRepository'

export default class HTTPMovieRepository extends MovieRepository {
    constructor({ fetcher, config, movieListValueObjectFactory, movieEntityFactory }) {
        super()
        this._fetcher = fetcher
        this._config = config
        this._movieListValueObjectFactory = movieListValueObjectFactory
        this._movieEntityFactory = movieEntityFactory
    }

    async search({ keyword }) {
        const API_HOST = this._config.get('API_HOST')
        const API_KEY = this._config.get('API_KEY')

        const { data } = await this._fetcher.get(
            `${API_HOST}/search/movie?api_key=${API_KEY}&query=${keyword}`
        )

        const { results } = data
        const movieListValueObject = this._movieListValueObjectFactory({list: results})

        return movieListValueObject
    }

    async detail({id}){
        const API_HOST = this._config.get('API_HOST')
        const API_KEY = this._config.get('API_KEY')

        const { data } = await this._fetcher.get(
            `${API_HOST}/movie/${id}?api_key=${API_KEY}`
        )
        
        const movie = this._movieEntityFactory({
            id: data.id, 
            title: data.title,                  
            posterPath: data.poster_path, 
            overview: data.overview, 
            releaseDate: data.relase_date, 
            originalLanguage: data.original_language
        })
        return movie
    }

    async trending(){
        const API_HOST = this._config.get('API_HOST')
        const API_KEY = this._config.get('API_KEY')

        const { data } = await this._fetcher.get(
            `${API_HOST}/movie/popular?api_key=${API_KEY}`
        )
        
        const { results } = data
        const movieListValueObject = this._movieListValueObjectFactory({list: results})
        return movieListValueObject
    }
}