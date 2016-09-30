import { expect } from 'chai'
import toPairs from '../functions/toPairs'

describe( 'toPairs', () => {
  it('it Creates an array of own enumerable string keyed-value pairs for object which can be consumed by _.fromPairs. If object is a map or set, its entries are returned.', () => {
    function Foo() {
      this.a = 2
      this.b = 3
    }

    expect( toPairs( new Foo ) ).to.eql( [ [ 'a', 2 ], [ 'b', 3 ] ] )
  })

  it('it converts an object to an array ', () => {
    expect( toPairs({ a: 2, b: 3 }) ).to.eql( [ [ 'a', 2 ], [ 'b', 3 ] ] )
  })

})
