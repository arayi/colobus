# functionName

## Function Description

```_c.stubObject()```

This method returns a new empty object.

## Function Technical Explanation

**Arguments**

none

**Returns**

(Object): Returns the new empty object.

## Example

```
var objects = _.times(2, _c.stubObject);

console.log(objects);
// => [{}, {}]

console.log(objects[0] === objects[1]);
// => false
```
