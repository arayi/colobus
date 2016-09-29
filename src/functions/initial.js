
const initial = (arr) => {
var arr = arr

  if (typeof arr === 'string') {
    arr = arr.split('')
  }

  if (Array.isArray(arr) && arr.pop() ) {
    return arr
  } else {
    return undefined
  }
}

export default initial
