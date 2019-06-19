import MovieValueObjectsFactories from '../ValueObjects/factories'
import MovieEntitiesFactories from '../Entities/factories';

import FetcherFactories from '../../Fetcher/factories'
import LocalStorageFactories from '../../LocalStorage/factories'
import HTTPMovieRepository from './HTTPMovieRepository'
import LocalStorageMovieRepository from './LocalStorageMovieRepository'
import EmptyMovieRepository from './EmptyMovieRepository'


export default class MovieRepositoriesFactories {
    static httpMovieRepository = ({ config }) =>
        new HTTPMovieRepository({
            fetcher: FetcherFactories.httpFetcher(),
            movieListValueObjectFactory: MovieValueObjectsFactories.movieListValueObject,
            movieEntityFactory: MovieEntitiesFactories.movieEntity,
            config
        })

    static localStorageMovieRepository = () =>
        new LocalStorageMovieRepository({
            localStorage: LocalStorageFactories.localStorage(),
            movieListValueObjectFactory: MovieValueObjectsFactories.movieListValueObject,
            movieEntityFactory: MovieEntitiesFactories.movieEntity,
        })

    static emptyMovieRepository = () =>
        new EmptyMovieRepository({
            movieListValueObjectFactory: MovieValueObjectsFactories.movieListValueObject,
            movieEntityFactory: MovieEntitiesFactories.movieEntity,
        })
}