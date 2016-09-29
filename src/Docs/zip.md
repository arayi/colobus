# zip

## Function Description

Creates an array of grouped elements, the first of which contains the first elements of the given arrays, the second of which contains the second elements of the given arrays, and so on.

## Function Technical Explanation

Arguments

[arrays] (...Array): The arrays to process.
Returns

(Array): Returns the new array of grouped elements.

## Example

```javascript
_.zip(['a', 'b'], [1, 2], [true, false]);
// => [['a', 1, true], ['b', 2, false]]
```
