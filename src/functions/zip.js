const zip = ( ...arrays ) => {
  let newArrayContainer = []
  let greatestLength = 0

  for ( let item of arrays ) {
    if ( item.length > greatestLength ) {
      greatestLength = item.length
    }
  }

  for ( let i = 0; i < greatestLength; i++ ) {
    let newArray = []
    for ( let j = 0; j < arrays.length; j++ ) {
      newArray[ j ] = arrays[ j ][ i ]
    }
    newArrayContainer[ i ] = newArray
  }

  return newArrayContainer
}

export default zip
