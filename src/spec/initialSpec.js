import { expect } from 'chai'
import initial from '../functions/initial'

describe( 'initial', () => {
  it('returns all but the last value of an array', () => {
    expect( initial([1,2,3]) ).to.eql([1,2])
  })
  it('returns all but the last character of a string as an array', () => {
    expect( initial('123') ).to.eql(['1','2'])
  })
  it('returns undefined when passed an object', () => {
    expect( initial({1: 'one'}) ).to.eql(undefined)
  })
  it('returns an empty array when array length is 1', () => {
    expect( initial([1]) ).to.eql([])
  })
  it('returns an empty array when string length is 1', () => {
    expect( initial('a') ).to.eql([])
  })
})
