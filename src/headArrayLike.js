function head (arr) {
  get headArrayLike ()
  {
    for (var potentialIndex in this.arr)
    {
      if( potentialIndex.isNaN() )
      {
        return undefined
      }
      else
      {
        let eofObject = arr[potentialIndex];
      }
    }
    return arr[0];
  }
}
