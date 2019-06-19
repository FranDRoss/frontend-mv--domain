import MovieRepository from './MovieRepository'

export default class LocalStorageMovieRepository extends MovieRepository {
    constructor({localStorage, movieListValueObjectFactory, movieEntityFactory }) {
        super()
        this._localStorage = localStorage
        this._movieListValueObjectFactory = movieListValueObjectFactory
        this._movieEntityFactory = movieEntityFactory
    }

    async search({ keyword }) {

        const results = await this._localStorage.get({ keyword: `__MOVIE_SEARCH_BY_${keyword}`})

        const resultsMovieListValueObject = JSON.parse(results)
        
        const movieListValueObject = this._movieListValueObjectFactory({list: results ? resultsMovieListValueObject.list : []})

        return movieListValueObject
    }

    // async detail({id}){

    //     const movieDetail = await this._localStorage.get({keyword: id})

    //     const movie = this._movieEntityFactory({
    //         id: movieDetail.id, 
    //         title: movieDetail.title,                  
    //         posterPath: movieDetail.poster_path, 
    //         overview: movieDetail.overview, 
    //         releaseDate: movieDetail.relase_date, 
    //         originalLanguage: movieDetail.original_language
    //     })
    //     return movie
    // }

    // async trending(){
        
    //     const data = await this._localStorage.get({keyword: "trending"})

    //     const { results } = data
    //     const movieListValueObject = this._movieListValueObjectFactory({list: results})
    //     return movieListValueObject
    // }

    async saveQuery({query, results}) {
       return this._localStorage.set({
           key: `__MOVIE_SEARCH_BY_${query}`,
           value: JSON.stringify(results.toJSON()) 
       })
    }
}