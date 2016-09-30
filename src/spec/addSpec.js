import { expect } from 'chai'
import add from '../functions/add'

describe( 'add', () => {

  it('adds two numbers', () => {
    expect(add(1, 2) ).to.eql( 3 )
  })

  it('defaults to zero if an argument is missing', (done) => {
    expect(add()).to.eql(0)
    expect(add(1)).to.eql(1)
    done()
  })

})