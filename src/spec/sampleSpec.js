import { expect } from 'chai'
import sample from '../functions/sample'

describe( 'sample', () => {
  let testData = [1, 'pony', {a: "answer"}]

  it('it samples to nearest integer (up)', () => {
    expect( testData.indexOf(sample(testData)) !== -1 ).to.eql( true )
  })

})
