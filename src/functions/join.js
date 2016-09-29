const join = (array, separator, result = "") => {
  if(Array.isArray(array)) {
    for (let i = 0; i < array.length; i++){
      if (array[i+1] === undefined) {
        result += array[i]
        break
      }
      result += `${array[i]}${separator}`
    }
  }
  return result
}
export default join
