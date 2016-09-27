import { expect } from 'chai'
import last from '../functions/last'

describe( 'last', () => {
  it('it returns the last element of an array', () => {
    expect( last(['john', 'cyndia', 'bob']) ).to.eq( 'bob' )
  })

  it('it returns the only element in a single item array', () => {
    expect( last(['john']) ).to.eq( 'john' )
  })

  it('it returns undefined if passed an object', () => {
    expect( last({0: 'a'}) ).to.eq( undefined )
  })

  it('it returns the last character if passed string', () => {
    expect( last('French Poodle') ).to.eq( 'e' )
  })

})
