
import { expect } from 'chai'
import head from '../functions/head'

describe( 'head', () => {
  it('returns the first element of an array or string', (done) => {
    expect( head([1,2,3]) ).to.eql( 1 )
    expect( head('asdf') ).to.eql( 'a' )
    done()
  })

  it('returns undefined when passed [], \'\', or an object', (done) => {
    expect( head([]) ).to.eql( undefined )
    expect( head('') ).to.eql( undefined )
    expect( head('') ).to.eql( undefined )
    done()
  })
})