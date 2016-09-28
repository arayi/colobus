import {
  expect
} from 'chai'
import zip from '../functions/zip'

describe( 'zip', () => {
  it( 'It should combine elements in order into a new array', () => {
    expect( zip( [ 'a', 'b', 'c' ], [ 1, 2, 3 ], [ true, false, false ] ) ).to.eql( [
      [ 'a', 1, true ],
      [ 'b', 2, false ],
      [ 'c', 3, false ]
    ] )
  } )

  it( 'It should combine elements in order and fill empty spaces with undefined', () => {
    expect( zip( [ 'a', 'b', 'c' ], [ 1, 2, 3, 4 ], [ true, false, false ], [ , , , {} ] ) ).to.eql( [
      [ 'a', 1, true, undefined ],
      [ 'b', 2, false, undefined ],
      [ 'c', 3, false, undefined ],
      [ undefined, 4, undefined, {} ],
    ] )
  } )
} )
