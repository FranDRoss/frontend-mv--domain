import Domain from '../../src'
import { expect } from 'chai'

let domain
describe('SearchMovieUseCase', () => {
    beforeEach(() => {
        domain = new Domain
    })

    it('#execute', async () => {
        const movies = await domain.get("search_movie_use_case").execute({ keyword: 'batman' })
        expect(movies).to.not.be.undefined

    })
})