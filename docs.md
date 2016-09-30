# flatten

## Function Description

Flattens array a single level deep.

## Function Technical Explanation

Arguments

array (Array): The array to flatten.
Returns

(Array): Returns the new flattened array.

## Example

```javascript  
_.flatten([1, [2, [3, [4]], 5]]);
// => [1, 2, [3, [4]], 5]
```


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


# fromPairs

## Function Description

The inverse of toPairs; this method returns an object composed from key-value pairs.

## Function Technical Explanation

Arguments

pairs (Array): The key-value pairs.
Returns

(Object): Returns the new object.

## Example

```javascript
_.fromPairs([['a', 1], ['b', 2]]);
// => { 'a': 1, 'b': 2 }
```


# head

## Function Description

Gets the first element of array.

## Function Technical Explanation

Arguments

array (Array): The array to query.
Returns

Returns the first element of array.

## Example

```javascript
_.head([1, 2, 3]);
// => 1

_.head([]);
// => undefined
```


# identity

## Function Description

This method returns the first argument it receives.

## Function Technical Explanation

Arguments

value : Any value.

Returns: Returns value.

## Example

```javascript
var object = { 'a': 1 };

console.log(_.identity(object) === object);
// => true
```


# initial

## Function Description

Gets all but the last element of array.

## Function Technical Explanation

Arguments

array (Array): The array to query.
Returns

(Array): Returns the slice of array.

## Example

```javascript
_.initial([1, 2, 3]);
// => [1, 2]
```


# join

## Function Description

Converts all elements in array into a string separated by separator.

## Function Technical Explanation

Arguments

array (Array): The array to convert.
[separator=','] (string): The element separator.
Returns

(string): Returns the joined string.

## Example

```javascript
_.join(['a', 'b', 'c'], '~');
// => 'a~b~c'
```


# last

## Function Description

Gets the last element of array.

## Function Technical Explanation

Arguments

array (Array): The array to query.
Returns

Returns the last element of array.

## Example

```javascript
_.last([1, 2, 3]);
// => 3
```


# round

## Function Description

Computes number rounded to precision.

## Function Technical Explanation

Arguments

number (number): The number to round.
[precision=0] (number): The precision to round to.
Returns

(number): Returns the rounded number.

## Example

```javascript
_.round(4.006);
// => 4

_.round(4.006, 2);
// => 4.01

_.round(4060, -2);
// => 4100
```


# toPairs

## Function Description

Creates an array of own enumerable string keyed-value pairs for object which can be consumed by fromPairs. If object is a map or set, its entries are returned.

## Function Technical Explanation

Aliases: entries

Arguments

object (Object): The object to query.
Returns

(Array): Returns the key-value pairs.

## Example

```javascript
function Foo() {
  this.a = 1;
  this.b = 2;
}
 
Foo.prototype.c = 3;

_.toPairs(new Foo);
// => [['a', 1], ['b', 2]] (iteration order is not guaranteed)
```


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


