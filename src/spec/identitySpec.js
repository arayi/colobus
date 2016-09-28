import { expect} from 'chai'
import identity from '../functions/identity'

describe( 'identity', () => {
  it('returns the first arg it recieves', () => {
    expect( identity(1,2) ).to.eql(1)
  })
})
