import { expect } from 'chai'
import sample from '../functions/sample'

describe( 'sample', () => {
  // TODO: FIX THIS FUNCTION - It returns random output, how do we use
  // chai to accept one of multiple answers as correct?
  it('it samples to nearest integer (up)', () => {
    expect( sample([5]) ).to.eql( 5 )
  })

})
