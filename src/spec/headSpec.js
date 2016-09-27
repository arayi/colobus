import { expect } from 'chai'
import head from '../functions/head'

describe( 'head', () => {
  it('it returns the first element of an array', () => {
    expect( head([1,2,3]) ).to.eql( 1 )
  })
  it('it returns the first element of a string', () => {
    expect( head('asdf') ).to.eql( 'a' )
  })

  it('it returns undefined when passed an empty array', () => {
    expect( head([]) ).to.eql( undefined )
  })

  it('it returns undefined when passed an empty string', () => {
    expect( head('') ).to.eql( undefined )
  })

  it('it returns undefined when passed an object', () => {
    expect( head('') ).to.eql( undefined )
  })

})
