const last = (arr) => {
  if(typeof arr === ('string') || Array.isArray(arr) && arr.length > 0) {
    return arr[arr.length-1]
  }
  else {
    return undefined
  }
}


export default last
