import { expect } from 'chai'
import flatten from '../functions/flatten'

describe( 'flatten', () => {
  it('It flattens the array a single level', () => {
    expect( flatten([[1,2],[5,3,[4,6]]]) ).to.eql( [1,2,5,3,[4,6]] )

  })

})
