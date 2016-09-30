# functionName

## Function Description

```
_c.fill(array, value, [start=0], [end=array.length])
```

Fills elements of array with value, optionally from start up to, but not including, end.

Note: This method mutates array.

## Function Technical Explanation

**Arguments**

array (Array): The array to fill.
value (*): The value to fill array with.
[start=0] (number): The start position.
[end=array.length] (number): The end position.

**Returns**

(Array): Returns array.

## Example

```
var array = [1, 2, 3];

_c.fill(array, 'a');
console.log(array);
// => ['a', 'a', 'a']

_c.fill(Array(3), 2);
// => [2, 2, 2]

_c.fill([4, 6, 8, 10], '*', 1, 3);
// => [4, '*', '*', 10]
```
