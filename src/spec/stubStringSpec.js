import { expect } from 'chai'
import stubString from '../functions/stubString'

describe( 'stubString', () => {

  it('returns a blank string', () => {
    expect( stubString() ).to.eql( '' )
  })

})