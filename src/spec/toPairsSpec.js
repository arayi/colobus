import { expect } from 'chai'
import toPairs from '../functions/toPairs'

describe( 'toPairs', () => {
  it('it ', () => {
    function Foo() {
      this.a = 2
      this.b = 3
    }

    expect( toPairs( new Foo ) ).to.eql( [ [ 'a', 2 ], [ 'b', 3 ] ] )
  })

  it('it ', () => {
    expect( toPairs({ a: 2, b: 3 }) ).to.eql( [ [ 'a', 2 ], [ 'b', 3 ] ] )
  })

})
