import { expect } from 'chai'
import sample from '../functions/sample'

const NUMTESTS = 40

describe( 'sample', () => {
  let testData = [1, 'pony', {a: "answer"}]
  let sampleResult = sample(testData)

  console.log( 'val: ' + testData.indexOf( sampleResult ) + '; result: ' + sampleResult + '; testData: ' + testData )

  it('it returns a random element from an array', () => {
    expect( testData.indexOf( sampleResult ) !== -1 ).to.eql( true )
  })


})
