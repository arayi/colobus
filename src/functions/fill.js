const fill = (array, value, start=0, end=array.length) => {
  if ( Array.isArray(array) )
  {
    for( let index = start; index < end; index++ )
    {
      array[index] = value
    }
  }

  return array;
}

export default fill
