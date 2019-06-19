export default class MovieEntity {
    constructor({id, title, posterPath, overview, releaseDate, originalLanguage }){
        this._id = id
        this._title = title
        this._posterPath = posterPath
        this._overview = overview
        this._releaseDate = releaseDate
        this._originalLanguage = originalLanguage
    }

    isEmpty () {return !this._id}

    id() {
        return this._id
    }

    equal({entity}) {
        return this._id === entity.id()
    }

    toJSON(){ // the exit of this is the entry of the factory 
        return {
            id: this._id,
            title: this._title,
            posterPath: this._posterPath,
            overview: this._overview,
            releaseDate: this._releaseDate,
            originalLanguage: this._originalLanguage
        }
    }N
}