# Flatten Deep

## Function Description

```
_c.flattenDeep(array)
```

Recursively flattens an array of arrays within arrays into a simple array.

## Function Technical Explanantion

Arguments

array (Array): The array to flatten.
Returns

(Array): Returns the new flattened array.

## Examples:
```javascript
_.flattenDeep([1, [2, [3, [4]], 5]]);
// => [1, 2, 3, 4, 5]
```
