import { expect } from 'chai'
import head from '../functions/head'

describe( 'head', () => {
  it('returns the first element of an array', () => {
    expect( head([1,2,3]) ).to.eql( 1 )
  }
  it('returns the first element of a string', () => {
    expect( head('asdf') ).to.eql( 'a' )
  })

  it('returns undefined when passed an empty array', () => {
    expect( head([]) ).to.eql( undefined )
  })

  it('returns undefined when passed an empty string', () => {
    expect( head('') ).to.eql( undefined )
  })

  it('returns undefined when passed an object', () => {
    expect( head('') ).to.eql( undefined )
  })
})
