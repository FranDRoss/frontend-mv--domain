import Domain from '../../src'
import { expect } from 'chai'

let domain
describe('GetDetailMovieUseCase', () => {
    beforeEach(() => {
        domain = new Domain
    })
   
    it('#execute', async() => {
       const movieDetail = await domain.get("get_detail_movie_use_case").execute({id: 550})
       expect(movieDetail).to.not.be.undefined
    })
})