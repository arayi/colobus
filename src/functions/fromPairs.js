const fromPairs = arr => {
  let result = {}
  for (let element of arr) {
    result[element[0]] = element[1]
  }
  return result
}
export default fromPairs
