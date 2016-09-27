import { expect } from 'chai'
import round from '../functions/round'

describe( 'round', () => {
  it('it rounds to nearest integer (up)', () => {
    expect( round(354.5) ).to.eq( 355 )
  })

  it('it rounds to nearest integer (down)', () => {
    expect( round(354.4) ).to.eq( 354 )
  })

  it('it rounds to the nearest precision of the second argument when input is positive', () => {
    expect( round(354.44, 1) ).to.eq( 354.4 )
  })

  it('it rounds to the nearest precision of the second argument when input is negative', () => {
    expect( round(354.44, -1) ).to.eq( 350 )
  })

  it('it rounds strings containing numbers', () => {
    expect( round("354.44", -1) ).to.eq( 350 )
  })

  it('it should return NaN for all other cases', () => {
    expect( round({}).NaN)
  })

  it('it should return NaN for all other cases', () => {
    expect( round([]).NaN)
  })

  it('it should return NaN for all other cases', () => {
    expect( round(null).NaN)
  })

})
