import Domain from '../../src'
import { expect } from 'chai'


let domain
describe('GetTrendingMovieUseCase', () => {
    beforeEach(() => {
        domain = new Domain
    })
   
    it('#execute', async() => {
       const movieList = await domain.get("get_trending_movie_use_case").execute()
       expect(movieList).to.not.be.undefined

    })
})