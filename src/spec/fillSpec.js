import { expect } from 'chai'
import fill from '../functions/fill'

describe( 'fill', () => {
  it('fills the array with value from beginning to end when only two arguments', () => {
    expect( fill( [4,true,{}], 2.71) ).to.eql( [2.71, 2.71, 2.71] )
  })

  it('', () => {
    expect( fill( [4, true, {}, 'John', 'Penny', 'Phil'], '19', 2, 4) ).to.eql( [4, true, '19', '19', 'Penny', "Phil"] )
  })


})
