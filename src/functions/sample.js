const sample = (arr) => {
  let result = Math.round( Math.random() * arr.length )
  console.log( result )
  return arr[result]
}

export default sample
