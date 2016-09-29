const head = (arr) => {
  if ( (typeof arr === ('string') || Array.isArray(arr) ) && arr.length > 0) {
    return arr[0]
  } else {
    return undefined
  }
}

export default head
