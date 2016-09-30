import { expect } from 'chai'
import stubTrue from '../functions/stubTrue'

describe( 'stubTrue', () => {

  it('returns a true value', () => {
    expect( stubTrue() ).to.eql( true )
  })

})