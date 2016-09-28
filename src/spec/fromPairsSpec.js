import { expect } from 'chai'
import fromPairs from '../functions/fromPairs'

describe( 'fromPairs', () => {
  it('returns an object composed from key-value pairs.', () => {
    expect( fromPairs([['a', 1], ['b', 2]]) ).to.eql( {a: 1, b: 2} )
  })

  it('returns an object composed from key-value pairs including undefined for keys or values when not apparent.', () => {
    expect( fromPairs([[1], ['b', 2]]) ).to.eql( {1:undefined, b: 2} )
  })

  it('returns an object composed from key-value pairs.', () => {
    expect( fromPairs('dev') ).to.eql( {d:undefined, e:undefined, v:undefined} )
  })


})
