export default class SearchMovieUseCase {
    constructor({remoteRepository, localRepository}){
        this._remoteRepository = remoteRepository
        this._localRepository = localRepository
    }
    async execute({keyword}) {

        const remoteMovieListValueObject = await this._remoteRepository.search({keyword})
        const localMovieListValueObject = await this._localRepository.search({keyword})

        const updatedMovieListValueObject = localMovieListValueObject.isEmpty ? remoteMovieListValueObject : localMovieListValueObject.concat({list: remoteMovieListValueObject})

        await this._localRepository.saveQuery({query: keyword, results: updatedMovieListValueObject})

        return updatedMovieListValueObject.toJSON()
    }
}