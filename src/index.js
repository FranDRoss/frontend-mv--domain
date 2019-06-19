import Config from './Config'
import MovieUseCasesFactories from './movie/UseCases/factories'

const config = new Config()

const useCases = {
    search_movie_use_case: MovieUseCasesFactories.searchMovieUseCase({config}),
    get_detail_movie_use_case: MovieUseCasesFactories.getDetailMovieUseCase({config}),
    get_trending_movie_use_case:  MovieUseCasesFactories.getTrendingMovieUseCase({config})
}

export default class Domain {
    get(useCase){
        return useCases[useCase]
    }
}

