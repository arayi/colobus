const sample = (arr) => {
  let result = Math.round( Math.random() * (arr.length - 1 ) )
  return arr[result]
}

export default sample
