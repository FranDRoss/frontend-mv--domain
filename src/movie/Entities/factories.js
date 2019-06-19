import MovieEntity from './MovieEntity'

export default class MovieEntitiesFactories {
    static movieEntity = ({ id, title, posterPath, overview, releaseDate, originalLenguage }) => 
    new MovieEntity({ id, title, posterPath, overview, releaseDate, originalLenguage })
}