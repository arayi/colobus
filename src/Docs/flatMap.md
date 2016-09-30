# functionName

## Function Description

```
_c.flatMap(collection, [iteratee=_.identity])
```

Creates a flattened array of values by running each element in collection thru iteratee and flattening the mapped results. The iteratee is invoked with three arguments: (value, index|key, collection).

## Function Technical Explanation

**Arguments**

collection (Array|Object): The collection to iterate over.
[iteratee=_.identity] (Function): The function invoked per iteration.

**Returns**

(Array): Returns the new flattened array.

## Example

```
function duplicate(n) {
  return [n, n];
}

_c.flatMap([1, 2], duplicate);
// => [1, 1, 2, 2]
```
