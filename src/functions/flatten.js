const flatten = (arr) => {
  var newArray = []
  if(Array.isArray(arr)) {
    for (let i of arr) {
      if(!Array.isArray(i)){
      newArray.push(i)
      } else {
        for(let j of i){
        newArray.push(j)
        }
      }
  }
  return newArray
 }
 return []
}


export default flatten
