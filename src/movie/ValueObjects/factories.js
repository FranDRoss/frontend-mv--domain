import MovieListValueObject from './MovieListValueObject'
import MovieEntitiesFactories from '../Entities/factories'

export default class MovieListValueObjectsFactories {
    static movieListValueObject = ({ list }) =>
        list.length > 0 ? 
        new MovieListValueObject({ 
            listEntities: list.map(movie => 
                MovieEntitiesFactories.movieEntity({
                    id: movie.id, 
                    title: movie.title, 
                    posterPath: movie.poster_path, 
                    overview: movie.overview, 
                    releaseDate: movie.relase_date, 
                    originalLanguage: movie.original_language
                }) 
            )
        })
        : new MovieListValueObject({listEntities: []})
}