import MovieRepository from './MovieRepository'

export default class EmptyMovieRepository extends MovieRepository {
    constructor({movieListValueObjectFactory, movieEntityFactory }) {
        super()

        this._movieListValueObjectFactory = movieListValueObjectFactory
        this._movieEntityFactory = movieEntityFactory
    }
    search(){
        return this._movieListValueObjectFactory({list: []})
    }

    detail(){
        return this._movieEntityFactory()
    }

    trending(){
        return this._movieListValueObjectFactory({list: []})
    } 

    async saveQuery() {
        return
     }
}