import { expect } from 'chai'
import stubFalse from '../functions/stubFalse'

describe( 'stubFalse', () => {

  it('returns a false value', () => {
    expect( stubFalse() ).to.eql( false )
  })

})