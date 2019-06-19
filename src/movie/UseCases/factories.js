import MovieRepositoriesFactories from '../Repositories/factories'

import SearchMovieUseCase from './SearchMovieUseCase'
import TrendingMovieUseCase from './GetTrendingMovieUseCase'
import DetailMovieUseCase from './GetDetailMovieUseCase'

const isNode = () => typeof window === 'undefined'

export default class MovieUseCasesFactories {
    static searchMovieUseCase = ({config}) => new SearchMovieUseCase({
        remoteRepository: MovieRepositoriesFactories.httpMovieRepository({config}),
        localRepository: isNode() ?  MovieRepositoriesFactories.emptyMovieRepository() :  MovieRepositoriesFactories.localStorageMovieRepository(),
        // localRepository: MovieRepositoriesFactories.emptyMovieRepository(),
    })
    static getTrendingMovieUseCase = ({config}) => new TrendingMovieUseCase({
        repository: MovieRepositoriesFactories.httpMovieRepository({config})
    })
    static getDetailMovieUseCase = ({config}) => new DetailMovieUseCase({
        repository: MovieRepositoriesFactories.httpMovieRepository({config})
    })
}