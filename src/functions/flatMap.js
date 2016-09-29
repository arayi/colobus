import flatten from '../functions/flatten'

const flatMap = (array, iteratee) => {
  let newArray = []
  for( let iterator of array )
  {
    newArray.push( iteratee(iterator) )
  }
  return flatten( newArray )
}

export default flatMap
