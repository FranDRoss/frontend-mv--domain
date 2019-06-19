export default class DetailMovieUseCase {
    constructor({repository}){
        this._repository = repository
    }
    async execute({id}) {
        const movie = await this._repository.detail({id})

        return movie.toJSON()
    }
}