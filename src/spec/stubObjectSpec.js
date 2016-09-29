import { expect } from 'chai'
import stubObject from '../functions/stubObject'

describe( 'stubObject', () => {

  it('returns a blank object', () => {
    expect( stubObject() ).to.eql( {} )
  })

})