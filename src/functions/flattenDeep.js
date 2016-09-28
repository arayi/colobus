const flattenDeep = (arr) =>
{
  var finalArray = []

  helper(finalArray, arr)

  return finalArray;
}

const helper = (finalArray, arr) =>
{
  if(Array.isArray(arr))
  {
    for (var element of arr)
    {
      if(Array.isArray(element))
      {
        helper(finalArray, element)
      }
      else
      {
        finalArray.push(element)
      }
    }
  }
}

export default flattenDeep
