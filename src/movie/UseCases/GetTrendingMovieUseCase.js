export default class TrendingMovieUseCase {
    constructor({repository}){
        this._repository = repository
    }
    async execute() {
        const movieListValueObject = await this._repository.trending()
        return movieListValueObject.toJSON()
    }
}