import { expect } from 'chai'
import join from '../functions/join'

describe( 'join', () => {
  it('Converts all elements in array into a string separated by separator', () => {
    expect( join(['a', 'b', 'c'], '~') ).to.eql("a~b~c")
  })

  it('Converts all elements in array into a string separated by separator', () => {
    expect( join(0) ).to.eql("")
  })
})
