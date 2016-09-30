const flattenDeep = (arr) => {
  const finalArray = []

  recurseThroughTree(finalArray, arr)

  return finalArray
}

const recurseThroughTree = (finalArray, arr) => {
  if (Array.isArray(arr) ) {
    for (let element of arr) {
      if (Array.isArray(element) ) {
        recurseThroughTree(finalArray, element)
      } else {
        finalArray.push(element)
      }
    }
  }
}

export default flattenDeep
