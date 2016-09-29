const round = (number, precision=0) => {
  let number = number

  if (typeof number !== 'number' && typeof number !== 'string') {
    return NaN
  } else if (!Number.isInteger(precision)) {
    return undefined
  }

  if (typeof number === 'string') {
    number = Number(number)
  }

  if (precision == 0) {
    return Math.round(number)
  } else {
    return (Math.round(number * Math.pow(10, precision))/(Math.pow(10, precision)))
  }
}

export default round
