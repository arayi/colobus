import { expect } from 'chai'
import flatMap from '../functions/flatMap.js'

describe( 'flatMap', () => {

  it('receive an array and pass that to a helper function then return the flattened results of that helper function', () => {
    expect( flatMap( [1,2,3,"Phil",5], (n) => [n, n] ) ).to.eql( [1,1,2,2,3,3,"Phil","Phil",5,5] )
  })

})
