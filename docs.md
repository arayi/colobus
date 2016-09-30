# functionName

## Function Description

```
_c.add(augend, addend)
```

Adds two numbers.

## Function Technical Explanation

**Arguments**

augend (Number): The first number to add.

addend (Number): The other number to add.

**Returns**

(Number): Returns the sum of the augend and addend.

## Example

```
_c.add(6, 15) // returns 21
```


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


# flatten

## Function Description

```javascript
_c.flatten()
```

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

```javascript
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
_c.flattenDeep([1, [2, [3, [4]], 5]]);
// => [1, 2, 3, 4, 5]
```


# fromPairs

## Function Description

```javascript
_c.fromPairs()
```

The inverse of toPairs; this method returns an object composed from key-value pairs.

## Function Technical Explanation

Arguments

pairs (Array): The key-value pairs.
Returns

(Object): Returns the new object.

## Example

```javascript
_c.fromPairs([['a', 1], ['b', 2]]);
// => { 'a': 1, 'b': 2 }
```


# head

## Function Description

```javascript
_c.head()
```

Gets the first element of array.

## Function Technical Explanation

Arguments

array (Array): The array to query.
Returns

Returns the first element of array.

## Example

```javascript
_c.head([1, 2, 3]);
// => 1

_c.head([]);
// => undefined
```


# identity

## Function Description

```javascript
_c.identity()
```

This method returns the first argument it receives.

## Function Technical Explanation

Arguments

value : Any value.

Returns: Returns value.

## Example

```javascript
var object = { 'a': 1 };

console.log(_c.identity(object) === object);
// => true
```


# initial

## Function Description

```javascript
_c.initial()
```

Gets all but the last element of array.

## Function Technical Explanation

Arguments

array (Array): The array to query.
Returns

(Array): Returns the slice of array.

## Example

```javascript
_c.initial([1, 2, 3]);
// => [1, 2]
```


# join

## Function Description

```javascript
_c.join()
```

Converts all elements in array into a string separated by separator.

## Function Technical Explanation

Arguments

array (Array): The array to convert.
[separator=','] (string): The element separator.
Returns

(string): Returns the joined string.

## Example

```javascript
_c.join(['a', 'b', 'c'], '~');
// => 'a~b~c'
```


# last

## Function Description

```javascript
_c.last()
```

Gets the last element of array.

## Function Technical Explanation

Arguments

array (Array): The array to query.
Returns

Returns the last element of array.

## Example

```javascript
_c.last([1, 2, 3]);
// => 3
```


# round

## Function Description

```javascript
_c.round()
```

Computes number rounded to precision.

## Function Technical Explanation

Arguments

number (number): The number to round.
[precision=0] (number): The precision to round to.
Returns

(number): Returns the rounded number.

## Example

```javascript
_c.round(4.006);
// => 4

_c.round(4.006, 2);
// => 4.01

_c.round(4060, -2);
// => 4100
```


# functionName

## Function Description

```_c.sample(collection)````

Gets a random element from collection.

## Function Technical Explanation

**Arguments**

collection (Array|Object): The collection to sample.

**Returns**

(*): Returns the random element.

## Example

```javascript
_c.sample([1, 2, 3, 4]);
// => 2
```


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


# functionName

## Function Description

```_c.stubFalse()```

This method returns false.

## Function Technical Explanation

**Arguments**

none

**Returns**

(Boolean): Returns false.

## Example

```
_.times(2, _c.stubFalse);
// => [false, false]
```


# functionName

## Function Description

```
_c.stubString()
```

This method returns an empty string.

## Function Technical Explanation

**Arguments**

none

**Returns**

(String): Returns the empty string.

## Example

```
_.times(2, _c.stubString);
// => ['', '']
```


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


# functionName

## Function Description

```
_c.stubTrue()
```

This method returns true.

## Function Technical Explanation

**Arguments**

none

**Returns**

(Boolean): Returns true.

## Example

```
_.times(2, _c.stubTrue);
// => [true, true]
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
_c.zip(['a', 'b'], [1, 2], [true, false]);
// => [['a', 1, true], ['b', 2, false]]
```


# toPairs

## Function Description

```javascript
_c.toPairs()
```

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

_c.toPairs(new Foo);
// => [['a', 1], ['b', 2]] (iteration order is not guaranteed)
```


