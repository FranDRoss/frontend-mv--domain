import SearchMovieUseCase from "./movie/UseCases/SearchMovieUseCase"

const useCases = {
    search_movie_use_case: new SearchMovieUseCase(),
    // detail_movie_use_case: "",
    // trending_movie_use_case: ""
}

export default class Domain {
    get(useCase){
        return useCases[useCase]
    }
}

