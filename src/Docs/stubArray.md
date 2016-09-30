# functionName

## Function Description

```_c.stubArray()```

This method returns a new empty array.

## Function Technical Explanation

**Arguments**

none

**Returns**

(Array): Returns the new empty array.

## Example

```
var arrays = _.times(2, _c.stubArray);

console.log(arrays);
// => [[], []]

console.log(arrays[0] === arrays[1]);
// => false
```
