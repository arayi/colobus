const sample = (arr) => {
  let result = Math.round( Math.random() * arr.length )
  return arr[result]
}

export default sample
