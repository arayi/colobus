
const initial = (arr) => {
var arr = arr
var argIsString = typeof arr === 'string'

  if (argIsString) {
    arr = arr.split('')
  }

  if (Array.isArray(arr) && arr.pop()) {
    return arr
  } else {
    return undefined
  }
}

export default initial
