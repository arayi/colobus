import { expect } from 'chai'
import flattenDeep from '../functions/flattenDeep'

describe( 'flattenDeep', () => {
  it('it returns an array with all nested elements de-nested such that no nested arrays remain', () => {
    expect( flattenDeep([12,[3,[5,3],[2,[1,9]],9],[6,14]]) ).to.eql( [12,3,5,3,2,1,9,9,6,14] )
  })

  it('it returns empty array object when given non-arrays', (done) => {
    expect( flattenDeep([])).to.eql( [] )
    expect( flattenDeep({a: 4, b: '6', george: () => {return null} })).to.eql([])
    expect( flattenDeep(false)).to.eql([])
    expect( flattenDeep(5)).to.eql([])

    done()
  })

})
