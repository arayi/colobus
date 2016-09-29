import { expect } from 'chai'
import stubArray from '../functions/stubArray'

describe( 'stubArray', () => {

  it('returns an empty array', () => {
    expect( stubArray() ).to.eql( [] )
  })

})