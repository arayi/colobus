import { expect } from 'chai'
import sample from '../functions/sample'

describe( 'sample', () => {
  let testData = [1, 'pony', {a: "answer"}]

  it('it returns a random element from a given array', () => {
    expect( testData.indexOf(sample(testData)) !== -1 ).to.eql( true )
  })

})
