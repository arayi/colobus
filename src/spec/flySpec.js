import { expect } from 'chai'
import fly from '../functions/fly'

describe( 'fly', () => {
  it('it flys', () => {
    expect( fly() ).to.eql( 'value' )
  })
})
