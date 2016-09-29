const toPairs = (obj) => {
  const array = []

  for ( let key in obj ) {
    array.push( [ key, obj[ key ] ] )
  }

  return array
}

export default toPairs
